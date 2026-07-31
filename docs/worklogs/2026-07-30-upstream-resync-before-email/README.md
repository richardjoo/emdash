# Upstream Resync Before Email

Internal AI-facing handover package for the sync checkpoint completed on `2026-07-30` before resuming `richardjoo-com` email-provider work.

## Snapshot

- Orchestrator repo branch: `main`
- Local upstream merge already present at start of this pass: `c65b440b`
- Local `HEAD` vs `upstream/main`: `48` ahead, `0` behind
- Local `HEAD` vs `origin/main` before push: `33` ahead, `0` behind
- Node baseline required by repo: `.nvmrc` -> `22.22.2`
- Verification in `richardjoo/emdash`:
  - `pnpm install` passed
  - `pnpm exec oxlint --type-aware -f json | jq '.diagnostics | length'` -> `0`
  - `pnpm typecheck` passed

## Scope

This package records:

- confirming that local `main` was already sync-current with `upstream/main`
- refreshing the workspace install state after the upstream changes
- re-running the minimum repo checks required before resuming child-site work
- establishing that the next child-site consume target should now be based on the released `0.31.1` package family, not `0.30.0`
