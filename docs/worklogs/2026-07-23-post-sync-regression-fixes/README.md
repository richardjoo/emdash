# Post-Sync Regression Fixes

Internal AI-facing handover package for the post-sync regression fixes and broader confidence pass completed on `2026-07-23`.

## Snapshot

- Orchestrator repo branch: `main`
- Upstream sync merge commit carried into this pass: `537528c9`
- Regression-fix commit: `2c0d152b`
- Local fork drift vs `upstream/main` after fixes: `45` commits ahead, `0` commits behind
- Local `HEAD` vs `origin/main` before push: `1` commit ahead, `0` commits behind
- Node baseline required by repo: `.nvmrc` -> `22.22.2`
- Verification in `richardjoo/emdash`:
  - `pnpm exec oxlint --type-aware -f json` -> clean diagnostics
  - `pnpm test` passed
  - Focused core tests passed:
    - `tests/unit/astro/oauth-env.test.ts`
    - `tests/unit/auth/oauth-start-route.test.ts`
    - `tests/unit/auth/oauth-callback-route.test.ts`
  - Focused e2e suites passed:
    - `e2e/tests/auth.spec.ts -g "Login Page"`
    - `e2e/tests/accessibility.spec.ts -g "Login Page"`
    - `e2e/tests/api-tokens.spec.ts -g "token value is not visible after navigating away and back"`
    - `e2e/tests/setup-wizard.spec.ts`
    - `e2e/tests/invite-flow.spec.ts`
    - `e2e/tests/marketplace.spec.ts`
  - Full `pnpm test:e2e` ran cleanly through the first `76/265` specs before the tool timeout, with no failure before timeout

## Contents

- [MASTER_DOCUMENTS.md](MASTER_DOCUMENTS.md) -- scope, version basis, and fix inventory
- [CHANGELOG.md](CHANGELOG.md) -- consolidated log of this pass
- [TODO.md](TODO.md) -- status tracker with owners and due dates
- [CROSS_REFERENCE_MAP.md](CROSS_REFERENCE_MAP.md) -- dependency map for the fix areas
- [WORKLOG.md](WORKLOG.md) -- chronological actions, findings, and decisions
- [HANDOVER.md](HANDOVER.md) -- next-AI handoff summary
- [READINESS_CHECKLIST.md](READINESS_CHECKLIST.md) -- pass/warn checklist for the current state
- [NEXT_AI_GUIDELINES.md](NEXT_AI_GUIDELINES.md) -- continuation rules for the next AI

## Scope

This package covers:

- fixing the post-sync OAuth env-resolution regression in `emdash`
- fixing `@emdash-cms/plugin-cli` bundle test performance regressions
- stabilizing Playwright admin startup and managed Astro dev-server handling in the e2e harness
- rerunning the broader package-test and targeted e2e confidence pass

Out of scope for this pass:

- child-site follow-up work
- exhaustive completion of the full serial `pnpm test:e2e` suite within this tool session
