# TODO

| ID | Item | Status | Owner | Due date | Notes |
| --- | --- | --- | --- | --- | --- |
| DOC-001 | Create the current fork-sync and child-site-upgrade handover package | Completed | OpenCode | 2026-07-14 | Added this dated worklog folder and refreshed the worklog index |
| OPS-001 | Sync `richardjoo/emdash` with `upstream/main` before further substantive work | Completed | OpenCode | 2026-07-14 | Fork is now `39` ahead and `0` behind upstream after the sync and follow-up docs commits |
| SITE-001 | Upgrade `richardjoo-com` to released `emdash@0.28.1` and `@emdash-cms/cloudflare@0.28.1` | Completed | OpenCode | 2026-07-14 | `richardjoo-com` commit `4bbe2e4`; local `pnpm typecheck` and `pnpm build` passed |
| SITE-002 | Remove the old `richardjoo-com` local EmDash patch exception | Completed | OpenCode | 2026-07-14 | Removed `patches/emdash@0.23.0.patch` and the workspace `patchedDependencies` entry |
| DOC-002 | Update the orchestrator child-site registry for the new `richardjoo-com` consume target | Completed | OpenCode | 2026-07-14 | Registry now records released packages and `none` for the patch exception |
| DOC-003 | Align canonical fork/orchestrator docs with the actual checkout layout and sync-first policy | Completed | OpenCode | 2026-07-14 | Updated `AGENTS.md`, `docs/orchestrator/README.md`, and `docs/orchestrator/SINGLE_AGENT_MODE.md` |
| OPS-002 | Repair template screenshot automation so `pnpm screenshots` works with the current auto-seed flow | Open | TBD | TBD | `scripts/screenshot-all-templates.mjs` still runs `pnpm bootstrap`, but template packages do not define `bootstrap` |
| TOOL-001 | Resolve the current `oxlint` panic so `pnpm lint:quick` and `pnpm lint:json` return diagnostics normally | Open | TBD | TBD | Reproduced on `2026-07-14` under Node `22.22.2` after the sync and fresh build |
| DOC-004 | Audit package READMEs and published docs-site pages for stale or conflicting operational guidance if scope expands | Open | TBD | TBD | This pass stayed focused on canonical/orchestrator docs and one child site |
| SITE-003 | Standardize `richardjoo-com` to the child-site doc standard runbook/status file set | Open | TBD | TBD | `docs/orchestrator/CHILD_SITE_REGISTRY.md` still marks the site docs as partially standardized |
