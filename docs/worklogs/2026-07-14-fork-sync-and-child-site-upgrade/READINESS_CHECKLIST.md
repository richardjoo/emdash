# Readiness Checklist

| Check | Status | Evidence |
| --- | --- | --- |
| Canonical root and orchestrator docs for this pass were identified explicitly | Pass | Scope fixed in `MASTER_DOCUMENTS.md` and `README.md` |
| Fork sync-first rule is explicit and non-conflicting | Pass | Updated `AGENTS.md`, `docs/orchestrator/README.md`, and `docs/orchestrator/SINGLE_AGENT_MODE.md` |
| The actual `.claude` / `.opencode` layout is documented accurately | Pass | `AGENTS.md` now matches the real checkout: `.claude/CLAUDE.md` exists; root `CLAUDE.md` and `.opencode/skills` do not |
| `richardjoo-com` consume target and patch-exception state are current in the registry | Pass | `docs/orchestrator/CHILD_SITE_REGISTRY.md` records `emdash@0.28.1`, `@emdash-cms/cloudflare@0.28.1`, and `none` |
| The child-site upgrade was locally verified | Pass | `richardjoo-com` `pnpm typecheck` and `pnpm build` both passed |
| The orchestrator repo build is clean | Pass | `pnpm build` passed in `richardjoo/emdash` |
| The orchestrator repo package typecheck is clean after build | Pass | `pnpm typecheck` passed after the fresh build |
| The normal lint baseline flow is available | No | `pnpm lint:json` and `pnpm lint:quick` still panic inside `oxlint` |
| Template screenshot automation matches current template scripts | No | `scripts/screenshot-all-templates.mjs` still calls `pnpm bootstrap` |
| Worklog index points to the current dated handover package | Pass | `docs/worklogs/README.md` now lists `2026-07-14-fork-sync-and-child-site-upgrade/` |
| Outstanding risks and follow-ups are recorded with owners/statuses | Pass | `TODO.md` and `HANDOVER.md` capture open repo and docs follow-ups |
| Resume order for the next AI is unambiguous | Pass | `HANDOVER.md` and `NEXT_AI_GUIDELINES.md` spell out the required read order and sync-first workflow |
