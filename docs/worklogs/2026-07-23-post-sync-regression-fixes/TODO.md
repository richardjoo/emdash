# TODO

| ID         | Item                                                                 | Status    | Owner    | Due date   | Notes                                                                                                              |
| ---------- | -------------------------------------------------------------------- | --------- | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| FIX-001    | Repair the post-sync OAuth env-resolution regression                 | Completed | OpenCode | 2026-07-23 | Focused core tests now pass                                                                                        |
| FIX-002    | Remove the `plugin-cli` bundle test timeout regression               | Completed | OpenCode | 2026-07-23 | Full `packages/plugin-cli` test suite now passes                                                                   |
| FIX-003    | Stabilize e2e admin/login startup after the upstream sync            | Completed | OpenCode | 2026-07-23 | Targeted auth, accessibility, API-token, setup, invite, and marketplace suites pass                                |
| VERIFY-001 | Re-run broader package confidence pass                               | Completed | OpenCode | 2026-07-23 | `pnpm test` passed                                                                                                 |
| VERIFY-002 | Complete the full serial `pnpm test:e2e` suite to the end in one run | Open      | TBD      | TBD        | The suite progressed cleanly through `76/265` specs before tool timeout; no in-run failure observed before timeout |
| SITE-001   | Child-site follow-up after the upstream sync                         | Open      | TBD      | TBD        | Still out of scope in this pass                                                                                    |
