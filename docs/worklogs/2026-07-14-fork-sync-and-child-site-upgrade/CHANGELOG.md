# Changelog

## 2026-07-14

- Synced `richardjoo/emdash` with `upstream/main` and pushed merge commit `a0b9146b`.
- Upgraded `richardjoo-com` to released `emdash@0.28.1` and `@emdash-cms/cloudflare@0.28.1`, removed the obsolete local EmDash patch, and pushed commit `4bbe2e4`.
- Updated `docs/orchestrator/CHILD_SITE_REGISTRY.md` to record the new `richardjoo-com` consume target and the removal of the patch exception; pushed commit `e9011e0f`.
- Updated `AGENTS.md` to match the actual symlink/tool-directory layout, make upstream sync mandatory when the fork is behind, and clarify how to handle an already-failing lint baseline.
- Updated `docs/orchestrator/README.md` and `docs/orchestrator/SINGLE_AGENT_MODE.md` to make the sync-first rule explicit and unambiguous.
- Updated `docs/worklogs/README.md` to index this new handover package.
- Added `docs/worklogs/2026-07-14-fork-sync-and-child-site-upgrade/` with the requested master-doc inventory, consolidated changelog, TODO tracker, cross-reference map, worklog, handover summary, readiness checklist, and next-AI guidance.
- Re-ran the current repo verification commands under Node `22.22.2`: `pnpm build` passed, `pnpm typecheck` passed after the build, and `pnpm lint:json` still panicked inside `oxlint`.
