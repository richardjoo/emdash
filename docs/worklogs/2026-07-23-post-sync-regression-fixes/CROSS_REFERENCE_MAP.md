# Cross-Reference Map

## Fix Areas

| File | Depends on | Why it mattered |
| --- | --- | --- |
| `packages/core/src/astro/routes/api/auth/oauth/env.ts` | auth OAuth routes, `virtual:emdash/env`, `cloudflare:workers`, focused env tests | Fixes the env source selection and throwing-getter handling |
| `packages/plugin-cli/src/build/api.ts` | `buildRuntime()` | Introduces `emitTypes` control for build paths |
| `packages/plugin-cli/src/build/pipeline.ts` | tsdown runtime build | Removes `.d.mts` work from bundle-only runtime builds |
| `packages/plugin-cli/src/bundle/api.ts` | `buildPlugin()` | Makes bundling use the faster no-types runtime path |
| `e2e/global-setup.ts` | Astro managed dev server CLI, fixture server lifecycle, browser warmup | Fixes stale daemon/port reuse and warms the admin SPA in a real browser |
| `e2e/fixtures/admin.ts` | admin shell loader + hydration behavior | Uses a loader-aware hydration signal and larger cold-start waits |
| `playwright.config.ts` | serial single-worker e2e suite | Raises timeout headroom for cold admin-route compilation |

## Verification Commands

| Command | Purpose |
| --- | --- |
| `pnpm test` | Full package test suite |
| `pnpm exec oxlint --type-aware -f json` | Repo lint baseline |
| `pnpm exec playwright test e2e/tests/auth.spec.ts -g "Login Page"` | Public login-page admin startup verification |
| `pnpm exec playwright test e2e/tests/accessibility.spec.ts -g "Login Page"` | Login-page accessibility verification |
| `pnpm exec playwright test e2e/tests/api-tokens.spec.ts -g "token value is not visible after navigating away and back"` | Authenticated route cold-start regression check |
| `pnpm exec playwright test e2e/tests/setup-wizard.spec.ts e2e/tests/invite-flow.spec.ts e2e/tests/marketplace.spec.ts` | Later-suite browser confidence sample |
