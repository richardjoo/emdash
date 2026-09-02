/**
 * Playwright global setup.
 *
 * Starts an isolated Astro dev server from the minimal e2e fixture,
 * runs dev-bypass setup, and seeds test data. Writes server info
 * to a temp file so tests and teardown can find it.
 */

import { execFile, spawn } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execAsync = promisify(execFile);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..");

interface Target {
	fixtureDir: string;
	buildFilter: string;
	depsMarkers: string[];
	usesTempDb: boolean;
}

const COLOR_PLUGIN_DIST = resolve(ROOT, "packages/plugins/color/dist/index.mjs");
const CLOUDFLARE_DIST = resolve(ROOT, "packages/cloudflare/dist/index.mjs");

const TARGETS: Record<string, Target> = {
	node: {
		fixtureDir: resolve(ROOT, "e2e/fixture"),
		buildFilter: "emdash-e2e-fixture...",
		depsMarkers: [COLOR_PLUGIN_DIST],
		usesTempDb: true,
	},
	cloudflare: {
		fixtureDir: resolve(ROOT, "e2e/fixture-cloudflare"),
		buildFilter: "emdash-e2e-fixture-cloudflare...",
		depsMarkers: [CLOUDFLARE_DIST, COLOR_PLUGIN_DIST],
		usesTempDb: false,
	},
};

const TARGET = TARGETS[process.env.EMDASH_E2E_TARGET ?? "node"] ?? TARGETS.node!;
const FIXTURE_DIR = TARGET.fixtureDir;
const CLI_BINARY = resolve(ROOT, "packages/core/dist/cli/index.mjs");
const PORT = 4444;
const MARKETPLACE_PORT = 4445;
const SERVER_INFO_PATH = join(tmpdir(), "emdash-pw-server.json");

const DEV_SERVER_STATUS_REGEX = /http:\/\/localhost:(\d+) \(pid (\d+),/;

// Regex patterns
const COOKIE_VALUE_PATTERN = /^([^;]+)/;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function ensureBuilt(): Promise<void> {
	if (existsSync(CLI_BINARY)) return;
	console.log("[pw] Built artifacts missing — running pnpm build...");
	await execAsync("pnpm", ["build"], { cwd: ROOT, timeout: 120_000 });
	console.log("[pw] Build complete.");
}

/**
 * Ensure all e2e fixture dependencies are built.
 * The CI build filter (--filter emdash...) only builds emdash and its deps,
 * not the fixture's plugin dependencies like @emdash-cms/plugin-color.
 */
async function ensureFixtureDepsBuilt(): Promise<void> {
	if (TARGET.depsMarkers.every((marker) => existsSync(marker))) return;
	console.log("[pw] Building e2e fixture dependencies...");
	await execAsync("pnpm", ["run", "--filter", TARGET.buildFilter, "build"], {
		cwd: ROOT,
		timeout: 180_000,
	});
	console.log("[pw] Fixture deps built.");
}

/**
 * Poll an endpoint until it returns a 2xx. We gate on a real success rather
 * than "server responding" because the dev server's Vite dep optimizer 500s on
 * cold start until it finishes pre-bundling -- pronounced under the Cloudflare
 * (workerd) runner, where the first requests fail with optimize-deps errors.
 */
async function waitForOk(
	url: string,
	timeoutMs: number,
	token?: string,
	extraHeaders?: Record<string, string>,
): Promise<Response> {
	const start = Date.now();
	let lastStatus = 0;
	let lastBody = "";
	const headers: Record<string, string> = { ...extraHeaders };
	if (token) headers.Authorization = `Bearer ${token}`;
	while (Date.now() - start < timeoutMs) {
		try {
			const res = await fetch(url, { headers, signal: AbortSignal.timeout(10_000) });
			if (res.ok) return res;
			lastStatus = res.status;
			lastBody = await res.text().catch(() => "");
		} catch {
			// Server/optimizer not ready yet
		}
		await new Promise((r) => setTimeout(r, 1000));
	}
	throw new Error(
		`${url} did not return ok within ${timeoutMs}ms (last ${lastStatus}): ${lastBody.slice(0, 300)}`,
	);
}

async function freePort(port: number): Promise<void> {
	const start = Date.now();
	while (Date.now() - start < 10_000) {
		let stdout = "";
		try {
			({ stdout } = await execAsync("ss", ["-ltnp", `( sport = :${port} )`], {
				timeout: 5_000,
			}));
		} catch {
			return;
		}

		const pids = Array.from(stdout.matchAll(/pid=(\d+)/g), (match) => Number(match[1]));
		if (pids.length === 0) return;

		for (const pid of pids) {
			try {
				process.kill(pid, "SIGTERM");
			} catch {
				// Best-effort cleanup only.
			}
		}

		await new Promise((r) => setTimeout(r, 500));

		for (const pid of pids) {
			try {
				process.kill(pid, 0);
				process.kill(pid, "SIGKILL");
			} catch {
				// Already gone.
			}
		}

		await new Promise((r) => setTimeout(r, 500));
	}
}

async function waitForManagedDevServer(
	astroBin: string,
	cwd: string,
	expectedPort: number,
	timeoutMs: number,
): Promise<{ pid: number }> {
	const start = Date.now();
	while (Date.now() - start < timeoutMs) {
		try {
			const { stdout } = await execAsync(astroBin, ["dev", "status"], {
				cwd,
				timeout: 10_000,
			});
			const match = stdout.match(DEV_SERVER_STATUS_REGEX);
			if (match) {
				const port = Number(match[1]);
				const pid = Number(match[2]);
				if (port !== expectedPort) {
					throw new Error(
						`Astro dev server started on unexpected port ${port} (expected ${expectedPort})`,
					);
				}
				return { pid };
			}
		} catch (error) {
			if (error instanceof Error && error.message.includes("unexpected port")) {
				throw error;
			}
		}
		await new Promise((r) => setTimeout(r, 1000));
	}

	throw new Error(`Astro dev server did not report ready status within ${timeoutMs}ms`);
}

async function warmAdminSpa(baseUrl: string, sessionCookie: string): Promise<void> {
	const { chromium } = await import("@playwright/test");
	const browser = await chromium.launch({ headless: true });

	try {
		if (sessionCookie) {
			const context = await browser.newContext();
			const [cookieName, cookieValue] = sessionCookie.split("=", 2);
			await context.addCookies([
				{
					name: cookieName,
					value: cookieValue ?? "",
					url: baseUrl,
				},
			]);
			const shellPage = await context.newPage();
			await shellPage.goto(`${baseUrl}/_emdash/admin/`, {
				waitUntil: "load",
				timeout: 120_000,
			});
			await shellPage.waitForSelector('aside[aria-label="Admin navigation"]', {
				timeout: 120_000,
			});

			for (const path of [
				"/_emdash/admin/content/posts",
				"/_emdash/admin/content/posts/new",
				"/_emdash/admin/media",
				"/_emdash/admin/users",
				"/_emdash/admin/settings",
				"/_emdash/admin/settings/api-tokens",
			]) {
				await shellPage.goto(`${baseUrl}${path}`, {
					waitUntil: "load",
					timeout: 120_000,
				});
				await shellPage.waitForSelector('aside[aria-label="Admin navigation"]', {
					timeout: 120_000,
				});
			}

			await context.close();
		}

		const loginPage = await browser.newPage();
		await loginPage.goto(`${baseUrl}/_emdash/admin/login`, {
			waitUntil: "load",
			timeout: 60_000,
		});
		await loginPage.locator("h1").filter({ hasText: "Sign in" }).waitFor({ timeout: 60_000 });
		await loginPage.close();
	} finally {
		await browser.close();
	}
}

// ---------------------------------------------------------------------------
// Seed data
// ---------------------------------------------------------------------------

async function apiPost(baseUrl: string, token: string, path: string, body: unknown): Promise<any> {
	const res = await fetch(`${baseUrl}${path}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
			"X-EmDash-Request": "1",
			Origin: baseUrl,
		},
		body: JSON.stringify(body),
	});
	if (!res.ok) {
		const text = await res.text().catch(() => "");
		throw new Error(`POST ${path} failed (${res.status}): ${text}`);
	}
	const json: any = await res.json();
	return json.data ?? json;
}

async function apiUploadMedia(
	baseUrl: string,
	token: string,
	filePath: string,
	filename: string,
	mimeType: string,
): Promise<{ id: string; storageKey: string; url: string }> {
	const fileBuffer = readFileSync(filePath);
	const blob = new Blob([fileBuffer], { type: mimeType });
	const formData = new FormData();
	formData.append("file", blob, filename);
	formData.append("width", "1");
	formData.append("height", "1");

	const res = await fetch(`${baseUrl}/_emdash/api/media`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"X-EmDash-Request": "1",
			Origin: baseUrl,
		},
		body: formData,
	});
	if (!res.ok) {
		const text = await res.text().catch(() => "");
		throw new Error(`Media upload failed (${res.status}): ${text}`);
	}
	const json: any = await res.json();
	const item = (json.data ?? json).item;
	return { id: item.id, storageKey: item.storageKey, url: item.url };
}

async function apiGet(baseUrl: string, token: string, path: string): Promise<any> {
	const res = await fetch(`${baseUrl}${path}`, {
		headers: { Authorization: `Bearer ${token}`, Origin: baseUrl },
	});
	if (!res.ok) {
		const text = await res.text().catch(() => "");
		throw new Error(`GET ${path} failed (${res.status}): ${text}`);
	}
	const json: any = await res.json();
	return json.data ?? json;
}

/**
 * Resolve seeded entries to their ids, in the order of `slugs`. The list GET
 * also warms the content route's module graph, so the media/image POSTs that
 * follow don't race the dev runner's optimizer on a cold route.
 */
async function idsBySlug(
	baseUrl: string,
	token: string,
	collection: string,
	slugs: string[],
): Promise<string[]> {
	const list = await apiGet(baseUrl, token, `/_emdash/api/content/${collection}?limit=100`);
	const items: Array<{ id: string; slug: string }> = list.items ?? list;
	const bySlug = new Map(items.map((i) => [i.slug, i.id]));
	return slugs.map((slug) => {
		const id = bySlug.get(slug);
		if (!id) throw new Error(`Seeded ${collection} entry not found for slug "${slug}"`);
		return id;
	});
}

async function seedTestData(
	baseUrl: string,
	token: string,
): Promise<{
	collections: string[];
	contentIds: Record<string, string[]>;
	mediaIds: Record<string, string>;
}> {
	const collections: string[] = ["posts", "pages"];
	const mediaIds: Record<string, string> = {};

	// Collections, fields, taxonomies, sections, and the plain posts/pages are
	// seeded server-side from the fixture's .emdash/seed.json during dev-bypass.
	// Resolve their ids by slug (the list GETs also warm the content routes).
	const postIds = await idsBySlug(baseUrl, token, "posts", [
		"first-post",
		"second-post",
		"draft-post",
	]);
	const pageIds = await idsBySlug(baseUrl, token, "pages", ["about", "contact"]);

	// The image post needs real bytes in storage, so it stays an API flow. The
	// content route is already warm from the GET above.
	const testImagePath = join(ROOT, "e2e/fixtures/assets/test-image.png");
	const media = await apiUploadMedia(baseUrl, token, testImagePath, "test-image.png", "image/png");
	mediaIds["testImage"] = media.id;

	const imagePost = await apiPost(baseUrl, token, "/_emdash/api/content/posts", {
		data: {
			title: "Post With Image",
			excerpt: "A post containing an image block",
			body: [
				{
					_type: "block",
					_key: "b1",
					style: "normal",
					children: [{ _type: "span", _key: "s1", text: "Text before image." }],
					markDefs: [],
				},
				{
					_type: "image",
					_key: "img1",
					asset: { _ref: media.id, url: media.url },
					alt: "Test image",
					width: 1,
					height: 1,
				},
				{
					_type: "block",
					_key: "b2",
					style: "normal",
					children: [{ _type: "span", _key: "s2", text: "Text after image." }],
					markDefs: [],
				},
			],
		},
		slug: "post-with-image",
	});
	const imagePostId = imagePost.item?.id ?? imagePost.id;
	await apiPost(baseUrl, token, `/_emdash/api/content/posts/${imagePostId}/publish`, {});
	postIds.push(imagePostId);

	const codePost = await apiPost(baseUrl, token, "/_emdash/api/content/posts", {
		data: {
			title: "Post With Code",
			excerpt: "A post containing supported and unsupported code blocks",
			body: [
				{
					_type: "code",
					_key: "code-js",
					code: 'const greeting = "hello";\nconsole.log(greeting);',
					language: "javascript",
				},
				{
					_type: "code",
					_key: "code-astro",
					code: '---\nconst title = "Hello";\n---\n<h1>{title}</h1>',
					language: "astro",
				},
			],
		},
		slug: "post-with-code",
	});
	const codePostId = codePost.item?.id ?? codePost.id;
	await apiPost(baseUrl, token, `/_emdash/api/content/posts/${codePostId}/publish`, {});
	postIds.push(codePostId);

	return {
		collections,
		contentIds: { posts: postIds, pages: pageIds },
		mediaIds,
	};
}

// ---------------------------------------------------------------------------
// Global setup
// ---------------------------------------------------------------------------

export default async function globalSetup(): Promise<void> {
	await ensureBuilt();
	await ensureFixtureDepsBuilt();

	// 0. Start mock marketplace server
	const { startMockMarketplace } = await import("./fixtures/mock-marketplace.js");
	const marketplaceServer = await startMockMarketplace(MARKETPLACE_PORT);
	const marketplaceUrl = `http://127.0.0.1:${MARKETPLACE_PORT}`;
	console.log(`[pw] Mock marketplace ready at ${marketplaceUrl}`);

	// 1. Run the fixture in-place to avoid Astro beta CSS virtual module
	// resolution bugs with symlinked temp dirs. Use a temp directory only for
	// the database — source files stay at their real paths so Astro's virtual
	// module resolver can find the compile metadata.
	const workDir = FIXTURE_DIR;
	const tempDataDir = mkdtempSync(join(tmpdir(), "emdash-pw-"));
	const dbPath = join(tempDataDir, "test.db");

	const fixtureNodeModules = join(FIXTURE_DIR, "node_modules");

	const baseUrl = `http://localhost:${PORT}`;

	// Cloudflare target: start from fresh miniflare D1/R2 state each run so the
	// fixture's seed isn't duplicated across runs (the Node target gets this for
	// free via its per-run temp database).
	if (!TARGET.usesTempDb) {
		rmSync(join(FIXTURE_DIR, ".wrangler"), { recursive: true, force: true });
	}

	// 2. Start dev server (with marketplace URL injected via env)
	const astroBin = join(fixtureNodeModules, ".bin", "astro");

	// Astro can keep a managed dev server process alive after an interrupted test
	// run. Stop any prior fixture server first so the new run doesn't attach to a
	// stale daemon on a different port.
	try {
		await execAsync(astroBin, ["dev", "stop"], {
			cwd: workDir,
			env: process.env,
			timeout: 30_000,
		});
	} catch {
		// No managed dev server was running for this fixture.
	}

	// Old foreground/background runs can still leave listeners behind even after
	// the managed dev server state is gone. Clear the fixed test ports so Astro
	// doesn't silently fall back to a different port that the rest of the harness
	// doesn't know about.
	await freePort(PORT);
	await freePort(PORT + 2);

	const server = spawn(astroBin, ["dev", "--port", String(PORT)], {
		cwd: workDir,
		env: {
			...process.env,
			EMDASH_TEST_DB: `file:${dbPath}`,
			EMDASH_MARKETPLACE_URL: marketplaceUrl,
		},
		stdio: "pipe",
	});

	server.stdout?.on("data", (data: Buffer) => {
		if (process.env.DEBUG) process.stderr.write(`[pw:${PORT}] ${data.toString()}`);
	});
	server.stderr?.on("data", (data: Buffer) => {
		if (process.env.DEBUG) process.stderr.write(`[pw:${PORT}] ${data.toString()}`);
	});

	try {
		// Dev-bypass token creation is not idempotent: each call drops the named
		// PAT and mints a new one. Poll the read-only status endpoint first, then
		// call dev-bypass exactly once.
		console.log("[pw] Waiting for server + setup...");
		const managedServer = await waitForManagedDevServer(astroBin, workDir, PORT, 60_000);
		await waitForOk(`${baseUrl}/_emdash/api/setup/status`, 120_000);
		const setupRes = await fetch(`${baseUrl}/_emdash/api/setup/dev-bypass?token=1`, {
			signal: AbortSignal.timeout(120_000),
		});
		if (!setupRes.ok) {
			const body = await setupRes.text().catch(() => "");
			throw new Error(`Dev bypass failed (${setupRes.status}): ${body.slice(0, 300)}`);
		}
		const setupJson: { data: { user: { id: string }; token?: string } } = await setupRes.json();
		const setupData = setupJson.data;
		const token = setupData.token;
		if (!token) throw new Error("Setup bypass did not return a PAT token");

		const setCookie = setupRes.headers.get("set-cookie");
		let sessionCookie = "";
		if (setCookie) {
			const match = setCookie.match(COOKIE_VALUE_PATTERN);
			if (match) sessionCookie = match[1]!;
		}

		// 5. Seed test data
		console.log("[pw] Seeding test data...");
		const seed = await seedTestData(baseUrl, token);

		// 5b. Warm up pages that use emdash/ui (triggers Astro compilation of all
		// component virtual modules, avoiding race conditions in tests)
		console.log("[pw] Warming up pages...");
		for (let attempt = 0; attempt < 3; attempt++) {
			try {
				const resp = await fetch(`${baseUrl}/posts/post-with-image`);
				if (resp.ok) break;
				// Retry on compilation errors — Astro may need multiple passes
				await new Promise((r) => setTimeout(r, 1000));
			} catch {
				await new Promise((r) => setTimeout(r, 1000));
			}
		}

		// 5c. Warm the admin's data routes so the SPA's first client-side fetches
		// don't race the dev optimizer. On a slow CI runner the Cloudflare runner
		// otherwise serves a cold 500 for these, rendering an empty admin and
		// failing the first specs before the route finishes compiling.
		console.log("[pw] Warming up admin API routes...");
		for (const path of [
			"/_emdash/api/schema/collections?includeFields=true",
			"/_emdash/api/media",
		]) {
			await waitForOk(`${baseUrl}${path}`, 60_000, token);
		}

		// 5d. Warm the admin SPA in a real browser. Plain HTTP 200s are not enough:
		// cold Vite compilation can still leave the boot loader visible until the
		// client graph fully evaluates once.
		await warmAdminSpa(baseUrl, sessionCookie);

		// 6. Write server info
		const info = {
			pid: managedServer.pid,
			workDir,
			tempDataDir,
			baseUrl,
			marketplaceUrl,
			token,
			sessionCookie,
			collections: seed.collections,
			contentIds: seed.contentIds,
			mediaIds: seed.mediaIds,
		};
		writeFileSync(SERVER_INFO_PATH, JSON.stringify(info, null, 2));

		console.log(`[pw] Server ready at ${baseUrl} (pid ${server.pid})`);
	} catch (error) {
		server.kill("SIGTERM");
		marketplaceServer.close();
		throw error;
	}
}
