# Next AI Guidelines

## Read Order

1. `AGENTS.md`
2. `CONTRIBUTING.md`
3. `docs/worklogs/README.md`
4. `docs/worklogs/2026-07-21-upstream-sync-and-doc-audit/README.md`
5. This folder's `README.md`

## Runtime Setup

- Switch to the Node version pinned in `.nvmrc` before running repo commands.
- If Playwright reruns behave strangely, clear `/tmp/emdash-pw-server.json` and let the managed dev-server cleanup in `e2e/global-setup.ts` start fresh.

## Current-State Notes

- The key regression-fix commit is `2c0d152b`.
- `bundlePlugin()` now intentionally skips declaration generation; do not reintroduce `dts: true` on the bundle path unless there is a concrete need.
- `resolveOAuthEnv()` must keep the safe `locals.runtime.env` fast-path plus the throwing-getter fallback behavior.
- The Playwright harness now depends on real browser warmup of admin routes; replacing that with simple HTTP warmup is likely to reintroduce cold-start flakes.
