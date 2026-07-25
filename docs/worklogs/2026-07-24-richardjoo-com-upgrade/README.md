# richardjoo-com Upgrade

Internal AI-facing handover package for the `richardjoo-com` child-site follow-up completed on `2026-07-24`.

## Snapshot

- Orchestrator repo branch: `main`
- Orchestrator repo current head at start of pass: `6c17f209`
- Child-site repo branch: `main`
- Child-site remote drift vs `origin/main`: `0` ahead, `0` behind before local edits
- Child-site repo head commit at start of pass: `4bbe2e4`
- Child-site package upgrade performed locally:
  - `emdash`: `^0.28.1` -> `^0.30.0`
  - `@emdash-cms/cloudflare`: `^0.28.1` -> `^0.30.0`
- Child-site local verification after upgrade:
  - `pnpm install` passed
  - `pnpm typecheck` passed
  - `pnpm build` passed
- Child-site local worktree caveat:
  - pre-existing unrelated local docs changes remain in `AGENTS.md`, `README.md`, `docs/cloudflare-site-runbook.md`, and `docs/handover/`
  - this pass also modified `package.json` and `pnpm-lock.yaml`

## Contents

- [MASTER_DOCUMENTS.md](MASTER_DOCUMENTS.md) -- scope, version basis, and current child-site state
- [CHANGELOG.md](CHANGELOG.md) -- consolidated log of this pass
- [TODO.md](TODO.md) -- status tracker with owners and due dates
- [CROSS_REFERENCE_MAP.md](CROSS_REFERENCE_MAP.md) -- dependency map for this child-site follow-up
- [WORKLOG.md](WORKLOG.md) -- chronological actions, findings, and decisions
- [HANDOVER.md](HANDOVER.md) -- next-AI handoff summary
- [READINESS_CHECKLIST.md](READINESS_CHECKLIST.md) -- pass/warn checklist for the current state
- [NEXT_AI_GUIDELINES.md](NEXT_AI_GUIDELINES.md) -- continuation rules for the next AI

## Scope

This package covers:

- inspecting the current `richardjoo-com` child-site state after the orchestrator repo sync
- upgrading the child site from released `0.28.1` packages to released `0.30.0` packages
- re-verifying the child site locally
- updating the orchestrator child-site registry to match the new consume target

Out of scope for this pass:

- committing or pushing child-site repo changes
- reconciling the child site's unrelated local docs changes
- email-provider setup, evergreen content drift, or other site-local operational backlog
