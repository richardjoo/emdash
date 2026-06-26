import { describe, expect, it, vi } from "vitest";

import { applySeedWithSchemaRepair } from "../../../src/astro/routes/api/setup/seed-repair.js";

describe("applySeedWithSchemaRepair", () => {
	it("returns the initial seed result when no schema drift exists", async () => {
		const result = { content: { created: 1 } } as any;
		const apply = vi.fn(async () => result);

		await expect(
			applySeedWithSchemaRepair(
				{} as any,
				{} as any,
				{ includeContent: true, onConflict: "skip" },
				"[setup]",
				apply,
			),
		).resolves.toBe(result);
		expect(apply).toHaveBeenCalledTimes(1);
	});

	it("repairs schema definitions and retries when the first apply hits drift", async () => {
		const repaired = { fields: { updated: 1 } } as any;
		const final = { content: { created: 7 } } as any;
		const apply = vi
			.fn()
			.mockRejectedValueOnce(new Error("table ec_pages has no column named featured_image: SQLITE_ERROR"))
			.mockResolvedValueOnce(repaired)
			.mockResolvedValueOnce(final);
		const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

		await expect(
			applySeedWithSchemaRepair(
				{} as any,
				{} as any,
				{ includeContent: true, onConflict: "skip", skipMediaDownload: true },
				"[setup-dev-bypass]",
				apply,
			),
		).resolves.toBe(final);

		expect(apply).toHaveBeenCalledTimes(3);
		expect(apply.mock.calls[1]?.[2]).toMatchObject({
			includeContent: false,
			onConflict: "update",
			skipMediaDownload: true,
		});
		expect(apply.mock.calls[2]?.[2]).toMatchObject({
			includeContent: true,
			onConflict: "skip",
			skipMediaDownload: true,
		});
		expect(warn).toHaveBeenCalledOnce();
		warn.mockRestore();
	});

	it("rethrows non-schema errors without retrying", async () => {
		const apply = vi.fn().mockRejectedValue(new Error("boom"));

		await expect(
			applySeedWithSchemaRepair(
				{} as any,
				{} as any,
				{ includeContent: true, onConflict: "skip" },
				"[setup]",
				apply,
			),
		).rejects.toThrow("boom");
		expect(apply).toHaveBeenCalledTimes(1);
	});
});
