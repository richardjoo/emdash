# Next AI Guidelines

## Read Order

1. `AGENTS.md`
2. `CONTRIBUTING.md`
3. `docs/orchestrator/README.md`
4. `docs/worklogs/README.md`
5. The latest dated folder relevant to your task

## Runtime Setup

- Switch to the Node version pinned in `.nvmrc` before running repo commands.
- If package commands complain about supply-chain policy or lockfile state after a large sync, run `pnpm install` before treating that as a code regression.

## Cross-Repo Workflow Rules

- Keep the sync-first rule: if the fork is behind `upstream/main`, sync before substantive work.
- Treat child-site propagation as a separate explicit scope from the repo sync itself.

## Current-State Notes

- The docs cleanup commit for this pass is `c17e3ed1`.
- The local upstream merge commit for this pass is `537528c9`.
- The prior `oxlint` panic note from older worklogs is stale for the current repo state; lint now returns `0` diagnostics under Node `22.22.2`.
- The OAuth env-resolution helper was intentionally changed to avoid touching `locals.runtime`; keep the `virtual:emdash/env` -> `cloudflare:workers` -> `import.meta.env` resolution order unless a new upstream decision supersedes it.
