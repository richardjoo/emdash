# Upstream Sync And Doc Audit

Internal AI-facing handover package for the upstream sync, full documentation audit cleanup, and post-sync verification completed on `2026-07-21`.

## Snapshot

- Orchestrator repo branch: `main`
- Documentation cleanup commit: `c17e3ed1`
- Upstream sync merge commit: `537528c9`
- Local fork drift vs `upstream/main` after merge: `43` commits ahead, `0` commits behind
- Local `HEAD` vs `origin/main` before push: `124` commits ahead, `0` commits behind
- Node baseline required by repo: `.nvmrc` -> `22.22.2`
- Post-sync verification in `richardjoo/emdash`:
  - `pnpm install` passed
  - `pnpm exec oxlint --type-aware -f json | jq '.diagnostics | length'` -> `0`
  - `pnpm build` passed
  - `pnpm typecheck` passed
  - `pnpm --filter emdash exec vitest run tests/unit/auth/oauth-start-route.test.ts tests/unit/auth/oauth-callback-route.test.ts --testTimeout=30000` passed
  - `docs/`: `pnpm build` passed

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

This package covers:

- syncing `richardjoo/emdash` with `upstream/main`
- resolving the OAuth route merge conflicts introduced by the sync
- auditing and correcting stale guidance in published docs and selected README files
- re-verifying the repo and docs site after the sync

Out of scope for this pass:

- child-site follow-up work after the sync
- child-site registry updates or site-package upgrades
- a full package test suite / e2e / visual baseline run
