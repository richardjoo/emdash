# Master Documents

## Version Basis

This handover package is keyed to the current fork state after the upstream sync (`537528c9`) and the follow-up regression-fix commit (`2c0d152b`).

| Scope                                         | Version basis                                                                                                                                                                                                                            |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Workspace root                                | `1.0.0`                                                                                                                                                                                                                                  |
| Core release family                           | `emdash@0.30.0`, `@emdash-cms/admin@0.30.0`, `@emdash-cms/auth@0.30.0`, `@emdash-cms/blocks@0.30.0`, `@emdash-cms/cloudflare@0.30.0`, `create-emdash@0.30.0`, `@emdash-cms/gutenberg-to-portable-text@0.30.0`, `@emdash-cms/x402@0.30.0` |
| Other published packages touched by this pass | `@emdash-cms/plugin-cli@0.8.0`                                                                                                                                                                                                           |
| Audit anchor                                  | `emdash@2c0d152b` on `2026-07-23`                                                                                                                                                                                                        |

## Fix Inventory

| Area                                 | Files                                                                                                                        | Why it changed                                                                                                                         |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| OAuth env resolution                 | `packages/core/src/astro/routes/api/auth/oauth/env.ts`                                                                       | Restore safe preference for `locals.runtime.env` while still handling the Astro 6+/7 throwing-getter case                              |
| Plugin bundling performance          | `packages/plugin-cli/src/build/api.ts`, `packages/plugin-cli/src/build/pipeline.ts`, `packages/plugin-cli/src/bundle/api.ts` | Skip unnecessary declaration generation during `bundlePlugin()`                                                                        |
| E2E admin startup / server lifecycle | `e2e/global-setup.ts`, `e2e/fixtures/admin.ts`, `playwright.config.ts`                                                       | Handle Astro managed dev servers, warm the admin SPA in a real browser, and increase timeout headroom for cold admin-route compilation |
| Release metadata                     | `.changeset/curvy-snakes-heal.md`                                                                                            | Record the published-package behavior changes for `emdash` and `@emdash-cms/plugin-cli`                                                |

## Canonical Decisions Reinforced

- `resolveOAuthEnv()` must tolerate the removed/throwing `locals.runtime.env` getter on newer Astro/Cloudflare integrations.
- `bundlePlugin()` should not pay declaration-generation cost for registry tarball output that only needs runtime JS plus manifest.
- The Playwright harness must treat Astro's managed background dev server as the source of truth for lifecycle cleanup.

## Consolidated Accuracy Notes

- Full package tests now pass after the regression fixes.
- Full `pnpm test:e2e` was not completed to suite end in this tool session, but no failure was observed in the first `76` specs before timeout, and multiple later targeted suites were run successfully.
