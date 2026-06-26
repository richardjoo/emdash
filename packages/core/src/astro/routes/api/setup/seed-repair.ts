import type { Kysely } from "kysely";

import type { Database } from "#db/types.js";
import { applySeed } from "#seed/apply.js";
import type { SeedApplyOptions, SeedApplyResult, SeedFile } from "#seed/types.js";

const SEED_SCHEMA_DRIFT_PATTERN = /has no column named|no such column|no such table/i;

type ApplySeedFn = typeof applySeed;

function getErrorMessage(error: unknown): string {
	if (error instanceof Error) {
		const cause = error.cause instanceof Error ? ` ${error.cause.message}` : "";
		return `${error.message}${cause}`;
	}

	return String(error);
}

export async function applySeedWithSchemaRepair(
	db: Kysely<Database>,
	seed: SeedFile,
	options: SeedApplyOptions,
	logPrefix: string,
	apply: ApplySeedFn = applySeed,
): Promise<SeedApplyResult> {
	try {
		return await apply(db, seed, options);
	} catch (error) {
		const message = getErrorMessage(error);
		if (!SEED_SCHEMA_DRIFT_PATTERN.test(message)) throw error;

		console.warn(
			`${logPrefix} Seed apply hit schema drift; repairing schema definitions before retry:`,
			message,
		);

		// Repair the declared schema shape first so the second pass can safely
		// write content rows against the now-current table definition.
		await apply(db, seed, {
			...options,
			includeContent: false,
			onConflict: "update",
		});

		return apply(db, seed, options);
	}
}
