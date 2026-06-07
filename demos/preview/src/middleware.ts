/**
 * Preview middleware
 *
 * Validates signed preview URLs, creates DO-backed sessions,
 * populates snapshots, and overrides the request-context DB.
 */

import { createPreviewMiddleware } from "@emdash-cms/cloudflare/db/do";
import type { MiddlewareHandler } from "astro";

const preview = createPreviewMiddleware({
	binding: "PREVIEW_DB",
	secret: import.meta.env.PREVIEW_SECRET,
});

// Astro's middleware types are nominal across patch versions because some
// internal types carry private fields. Bridge the runtime-compatible handler
// here so the preview demo doesn't depend on every workspace package resolving
// the exact same Astro patch.
export const onRequest: MiddlewareHandler = (context, next) =>
	preview(
		// eslint-disable-next-line typescript/no-unsafe-type-assertion -- cross-version Astro middleware signatures are structurally compatible at runtime
		context as unknown as Parameters<typeof preview>[0],
		// eslint-disable-next-line typescript/no-unsafe-type-assertion -- cross-version Astro middleware signatures are structurally compatible at runtime
		next as unknown as Parameters<typeof preview>[1],
	);
