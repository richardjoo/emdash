# Next AI Guidelines

## Read Order

1. `AGENTS.md`
2. `CONTRIBUTING.md`
3. `docs/worklogs/README.md`
4. The latest dated folder under `docs/worklogs/` relevant to your task

## Runtime Setup

- Switch to the Node version pinned in `.nvmrc` before running repo commands.
- Re-run `pnpm lint:json | jq '.diagnostics | length'` if you need a fresh baseline.

## Documentation Rules

- Treat canonical root docs as source-of-truth governance.
- Treat `docs/worklogs/` as the place for dated status, TODOs, and handovers.
- Do not write temporary investigation notes into the repo root or published docs tree.

## Future Worklog Package Template

- Folder name: `docs/worklogs/YYYY-MM-DD-short-slug/`
- Include: `README.md`, `MASTER_DOCUMENTS.md`, `CHANGELOG.md`, `TODO.md`, `CROSS_REFERENCE_MAP.md`, `WORKLOG.md`, `HANDOVER.md`, `READINESS_CHECKLIST.md`, `NEXT_AI_GUIDELINES.md`
- In `TODO.md`, always include explicit `Status`, `Owner`, and `Due date` columns. Use `TBD` when the source of truth does not define them.
- In `READINESS_CHECKLIST.md`, separate canonical-doc clarity from broader repo risks so a reader can tell what is truly resolved.

## Known Current-Fork Caveats

- `pnpm screenshots` is not currently reliable on this fork because the harness still expects `pnpm bootstrap` in template packages.
- The fork has upstream drift. Confirm whether future tasks should remain fork-local or start from an upstream sync.
