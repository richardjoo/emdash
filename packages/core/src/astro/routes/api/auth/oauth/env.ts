function hasRuntimeEnv(value: unknown): value is { runtime: { env: Record<string, unknown> } } {
	if (typeof value !== "object" || value === null || !("runtime" in value)) return false;

	const runtime = value.runtime;
	if (typeof runtime !== "object" || runtime === null || !("env" in runtime)) return false;

	return typeof runtime.env === "object" && runtime.env !== null;
}

async function loadWorkersEnv(): Promise<Record<string, unknown> | undefined> {
	try {
		const { env } = await import("cloudflare:workers");
		if (typeof env === "object" && env !== null) {
			return Object.fromEntries(Object.entries(env));
		}

		return undefined;
	} catch {
		return undefined;
	}
}

export async function resolveOAuthEnv(
	locals: unknown,
	fallbackEnv: Record<string, unknown>,
	loadEnv: () => Promise<Record<string, unknown> | undefined> = loadWorkersEnv,
): Promise<Record<string, unknown>> {
	if (hasRuntimeEnv(locals)) return locals.runtime.env;

	try {
		const workersEnv = await loadEnv();
		return workersEnv ?? fallbackEnv;
	} catch {
		return fallbackEnv;
	}
}
