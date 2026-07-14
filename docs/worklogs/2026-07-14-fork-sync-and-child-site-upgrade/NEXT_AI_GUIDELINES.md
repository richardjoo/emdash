# Next AI Guidelines

## Read Order

1. `AGENTS.md`
2. `CONTRIBUTING.md`
3. `docs/orchestrator/README.md`
4. `docs/orchestrator/SINGLE_AGENT_MODE.md`
5. `docs/orchestrator/CHILD_SITE_REGISTRY.md`
6. `docs/worklogs/README.md`
7. The latest dated folder under `docs/worklogs/` relevant to your task

## Runtime Setup

- Switch to the Node version pinned in `.nvmrc` before running repo commands.
- If source changed and package checks look suspicious, run `pnpm build` before relying on `pnpm typecheck`.
- Treat the current `oxlint` panic as a known repo issue until it is resolved.

## Cross-Repo Workflow Rules

- If `origin/main` is behind `upstream/main`, sync `richardjoo/emdash` before any other substantive work.
- After the fork is current, update affected child sites serially rather than in parallel.
- Default child-site target is released npm packages only; any local patch exception must be recorded in `docs/orchestrator/CHILD_SITE_REGISTRY.md` with a removal trigger.

## Documentation Rules

- Treat canonical root/orchestrator docs as the source of truth for rules and workflow.
- Treat `docs/worklogs/` as the place for dated status, TODOs, decisions, and handovers.
- Start a new dated folder for a new handover or reconciliation pass; keep historical folders intact.

## Known Current-State Caveats

- `pnpm lint:quick` and `pnpm lint:json` currently panic inside `oxlint` under Node `22.22.2`.
- `pnpm screenshots` is still not reliable because the harness expects `pnpm bootstrap` in template packages.
- `richardjoo-com` is upgraded and verified on released `0.28.1` packages, but its docs are still only partially standardized relative to the child-site doc standard.
