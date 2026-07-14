# Fork Sync And Child Site Upgrade

Internal AI-facing handover package for the upstream sync, child-site upgrade, and canonical/orchestrator doc refresh completed on `2026-07-14`.

## Snapshot

- Orchestrator repo branch: `main`
- Orchestrator sync commit: `a0b9146b`
- Orchestrator registry-update commit: `e9011e0f`
- Child-site upgrade commit (`richardjoo-com`): `4bbe2e4`
- Fork drift vs `upstream/main` after sync: `39` commits ahead, `0` commits behind
- Node baseline required by repo: `.nvmrc` -> `22.22.2`
- Baseline lint under Node `22.22.2`: `pnpm lint:json` currently panics inside `oxlint`
- Post-sync verification in `richardjoo/emdash`: `pnpm build` passed; `pnpm typecheck` passed after the fresh build
- Post-upgrade verification in `richardjoo-com`: `pnpm typecheck` passed; `pnpm build` passed
- Final child-site worktree check: `richardjoo-com` has newer uncommitted local docs changes (`AGENTS.md`, `README.md`, `docs/cloudflare-site-runbook.md`, `docs/handover/`) that were not made in this pass

## Contents

- [MASTER_DOCUMENTS.md](MASTER_DOCUMENTS.md) -- canonical docs inventory, scope, and version basis
- [CHANGELOG.md](CHANGELOG.md) -- consolidated log of this pass
- [TODO.md](TODO.md) -- status tracker with owners and due dates
- [CROSS_REFERENCE_MAP.md](CROSS_REFERENCE_MAP.md) -- inter-document and cross-repo dependency map
- [WORKLOG.md](WORKLOG.md) -- chronological actions, findings, and decisions
- [HANDOVER.md](HANDOVER.md) -- next-AI handoff summary
- [READINESS_CHECKLIST.md](READINESS_CHECKLIST.md) -- pass/warn checklist for the current state
- [NEXT_AI_GUIDELINES.md](NEXT_AI_GUIDELINES.md) -- continuation rules for the next AI

## Scope

This package covers the canonical/root docs and the orchestrator docs needed to resume cross-repo work accurately:

- `README.md`
- `CONTRIBUTING.md`
- `AGENTS.md`
- `TEMPLATES.md`
- `docs/README.md`
- `docs/orchestrator/README.md`
- `docs/orchestrator/SINGLE_AGENT_MODE.md`
- `docs/orchestrator/CHILD_SITE_REGISTRY.md`
- `docs/worklogs/README.md`

It also captures the current verified consume state of the `richardjoo-com` child site.

Out of scope for this pass:

- a full audit of package-specific `README.md` files
- a full audit of published docs-site content under `docs/src/content/docs/`
- child-site documentation standardization beyond recording the current `richardjoo-com` state
