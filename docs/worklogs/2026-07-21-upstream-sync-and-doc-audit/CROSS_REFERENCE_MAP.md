# Cross-Reference Map

## Canonical And Audit Docs

| Document                                       | References out to                                                                                               | Referenced by                    | Dependency notes                                                           |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------- |
| `README.md`                                    | `CONTRIBUTING.md`, `AGENTS.md`, `TEMPLATES.md`, `docs/orchestrator/README.md`, `docs/README.md`                 | root entry points                | Public overview remains the top-level handoff                              |
| `CONTRIBUTING.md`                              | `AGENTS.md`, `TEMPLATES.md`, `TRIAGE.md`, `docs/README.md`                                                      | `README.md`, `AGENTS.md`         | Contributor workflow source of truth                                       |
| `AGENTS.md`                                    | `CONTRIBUTING.md`, `.github/PULL_REQUEST_TEMPLATE.md`, `docs/orchestrator/README.md`, `docs/worklogs/README.md` | `README.md`, `.claude/CLAUDE.md` | AI workflow source of truth                                                |
| `docs/src/content/docs/reference/rest-api.mdx` | current API routes, auth middleware, client helpers                                                             | public docs navigation           | Must stay aligned with response envelope and CSRF behavior                 |
| `docs/src/content/docs/getting-started.mdx`    | scaffolder guidance, deployment guides                                                                          | homepage, intro pages            | Default onboarding path should stay aligned with the recommended installer |
| `demos/cloudflare/README.md`                   | demo config and Cloudflare adapter docs                                                                         | `CONTRIBUTING.md`                | Operational README should match checked-in demo config                     |

## Merge-Specific Resolution Points

| File                                                                   | Why it mattered                                                  |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `packages/core/src/astro/routes/api/auth/oauth/[provider].ts`          | Merge conflict in OAuth start route env resolution               |
| `packages/core/src/astro/routes/api/auth/oauth/[provider]/callback.ts` | Merge conflict in OAuth callback env resolution                  |
| `packages/core/src/astro/routes/api/auth/oauth/env.ts`                 | Final local fix to satisfy the upstream `#1736` regression tests |

## Worklog Package Files

| Document                 | Purpose dependency                                               |
| ------------------------ | ---------------------------------------------------------------- |
| `README.md`              | Entry point for the pass snapshot and scope                      |
| `MASTER_DOCUMENTS.md`    | Source-of-truth set, version basis, and corrected docs inventory |
| `CHANGELOG.md`           | Time-ordered record of the docs commit, merge, and verification  |
| `TODO.md`                | Outstanding follow-up tracker                                    |
| `WORKLOG.md`             | Chronological execution notes                                    |
| `HANDOVER.md`            | Next-AI summary                                                  |
| `READINESS_CHECKLIST.md` | Pass/warn view of the current state                              |
| `NEXT_AI_GUIDELINES.md`  | Resume order and continuation rules                              |
