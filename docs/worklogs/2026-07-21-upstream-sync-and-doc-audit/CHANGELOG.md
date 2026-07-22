# Changelog

## 2026-07-21

- Committed the docs-audit cleanup as `c17e3ed1` (`docs: align guides with current runtime and API`).
- Merged `upstream/main` into local `main` and resolved the two OAuth route conflicts in:
  - `packages/core/src/astro/routes/api/auth/oauth/[provider].ts`
  - `packages/core/src/astro/routes/api/auth/oauth/[provider]/callback.ts`
- Updated `packages/core/src/astro/routes/api/auth/oauth/env.ts` so OAuth env resolution no longer touches `locals.runtime` and now satisfies the new upstream regression tests.
- Re-ran verification after the sync:
  - `pnpm install`
  - `pnpm build`
  - `pnpm typecheck`
  - `pnpm exec oxlint --type-aware -f json | jq '.diagnostics | length'`
  - `pnpm --filter emdash exec vitest run tests/unit/auth/oauth-start-route.test.ts tests/unit/auth/oauth-callback-route.test.ts --testTimeout=30000`
  - `docs/`: `pnpm build`
- Added `docs/worklogs/2026-07-21-upstream-sync-and-doc-audit/` and indexed it from `docs/worklogs/README.md`.
