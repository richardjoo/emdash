# TODO

| ID | Item | Status | Owner | Due date | Notes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------------- |
| DOC-001 | Reconcile canonical root docs with the current auto-seed workflow | Completed | OpenCode | 2026-06-25 | `README.md` and `TEMPLATES.md` no longer instruct stale manual seed/bootstrap steps |
| DOC-002 | Establish an internal `docs/worklogs/` convention and create a dated handover package | Completed | OpenCode | 2026-06-25 | Root AI guidance and docs subproject guidance now point to the new location |
| DOC-003 | Re-run the repo baseline checks under the Node version pinned in `.nvmrc` | Completed | OpenCode | 2026-06-25 | `pnpm lint:json                                                                                                           | jq '.diagnostics | length'`returned`0`under Node`22.22.2` |
| OPS-001 | Repair template screenshot automation so `pnpm screenshots` works with the current auto-seed flow | Open | TBD | TBD | Verified broken on `2026-06-25`: the harness still runs `pnpm bootstrap`, but template packages do not define `bootstrap` |
| OPS-002 | Decide whether to sync this fork with `upstream/main` before the next substantive feature or docs pass | Open | TBD | TBD | Current drift at audit time: `21` ahead / `39` behind |
| OPS-003 | Resolve the current `@emdash-cms/plugin-cli` package typecheck failure | Open | TBD | TBD | `pnpm typecheck` fails because `packages/plugin-cli` imports missing members from `@emdash-cms/plugin-types` |
| DOC-004 | If scope expands beyond root governance docs, audit package READMEs and published docs-site pages for similar stale seed/bootstrap language | Open | TBD | TBD | This pass intentionally stopped at canonical/root governance docs |
