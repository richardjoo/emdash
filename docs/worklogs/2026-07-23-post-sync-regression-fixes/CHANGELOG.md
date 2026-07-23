# Changelog

## 2026-07-23

- Fixed the post-sync OAuth env-resolution regression in `packages/core/src/astro/routes/api/auth/oauth/env.ts`.
- Fixed `@emdash-cms/plugin-cli` bundle test performance by letting the bundle path skip unnecessary declaration generation.
- Hardened Playwright global setup and admin fixtures to handle Astro-managed dev servers, stale listeners, and cold admin-route compilation.
- Added `.changeset/curvy-snakes-heal.md` for the `emdash` and `@emdash-cms/plugin-cli` package behavior changes.
- Re-ran the broader confidence pass: `pnpm test` passed; targeted e2e suites passed; the full serial `pnpm test:e2e` advanced through the first `76/265` specs without failure before the tool timeout.
