# Readiness Checklist

| Check | Status | Evidence |
| --- | --- | --- |
| Regression-fix commit exists on `main` | Pass | `2c0d152b` |
| Lint is clean after the fixes | Pass | `pnpm exec oxlint --type-aware -f json` returned clean diagnostics |
| Full package test suite passes | Pass | `pnpm test` passed |
| Focused OAuth/env regression tests pass | Pass | `oauth-env`, `oauth-start-route`, and `oauth-callback-route` tests passed |
| `plugin-cli` bundle timeout is resolved | Pass | Full `packages/plugin-cli` test suite passed |
| Public login-page e2e regression is resolved | Pass | `e2e/tests/auth.spec.ts -g "Login Page"` passed |
| Login-page accessibility regression is resolved | Pass | `e2e/tests/accessibility.spec.ts -g "Login Page"` passed |
| Authenticated route cold-start sample is resolved | Pass | `e2e/tests/api-tokens.spec.ts -g "token value is not visible after navigating away and back"` passed |
| Additional later-suite e2e samples pass | Pass | `setup-wizard`, `invite-flow`, and `marketplace` suites passed |
| Full serial `pnpm test:e2e` completed to the end in this session | No | Tool timeout stopped the run after the first `76/265` specs, though no failure occurred before timeout |
| Child-site follow-up is complete | No | Still out of scope |
