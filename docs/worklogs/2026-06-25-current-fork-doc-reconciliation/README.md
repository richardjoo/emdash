# Current Fork Doc Reconciliation

Internal AI-facing handover package for the canonical root-document reconciliation completed on `2026-06-25` against the current fork state.

## Snapshot

- Branch: `main`
- Commit at audit start: `bbf61e00`
- Fork drift vs `upstream/main`: `21` commits ahead, `39` commits behind
- Node baseline required by repo: `.nvmrc` -> `22.22.2`
- Baseline lint before edits: `pnpm lint:json | jq '.diagnostics | length'` -> `0`
- Post-edit verification: `pnpm lint:quick` passed; `pnpm typecheck` currently fails in `packages/plugin-cli`

## Contents

- [MASTER_DOCUMENTS.md](MASTER_DOCUMENTS.md) -- canonical docs inventory and version basis
- [CHANGELOG.md](CHANGELOG.md) -- consolidated log of this reconciliation pass
- [TODO.md](TODO.md) -- status tracker with owners and due dates
- [CROSS_REFERENCE_MAP.md](CROSS_REFERENCE_MAP.md) -- inter-document reference and dependency map
- [WORKLOG.md](WORKLOG.md) -- chronological actions, findings, and decisions
- [HANDOVER.md](HANDOVER.md) -- next-AI handoff summary
- [READINESS_CHECKLIST.md](READINESS_CHECKLIST.md) -- pass/warn checklist for current state
- [NEXT_AI_GUIDELINES.md](NEXT_AI_GUIDELINES.md) -- formatting and continuation rules for the next AI

## Scope

This package is limited to canonical/root governance docs:

- `README.md`
- `CONTRIBUTING.md`
- `AGENTS.md`
- `TEMPLATES.md`
- `docs/README.md`

Out of scope for this pass:

- package-specific `README.md` files
- package/demo/template `CHANGELOG.md` files
- published docs site content under `docs/src/content/docs/`
- non-root operational scripts except where they materially affect root-doc accuracy
