# TODO

| ID       | Item                                                                    | Status    | Owner                  | Due date     | Notes                                                                                       |
| -------- | ----------------------------------------------------------------------- | --------- | ---------------------- | ------------ | ------------------------------------------------------------------------------------------- |
| SITE-001 | Verify the fork is not behind upstream before child-site work           | Completed | OpenCode               | 2026-09-03   | Fork was `63` commits ahead and `0` behind after fetching upstream                          |
| SITE-002 | Upgrade `richardjoo-com` from released `0.33.0` to `0.36.0`             | Completed | OpenCode               | 2026-09-03   | Child-site PR #43 merged as `5bea6d2`                                                       |
| SITE-003 | Back up and migrate production D1 before deployment                     | Completed | OpenCode               | 2026-09-03   | Backup run `33719529053`; migrations through `073_media_focal_point`                        |
| SITE-004 | Verify the production deployment and migration state                    | Completed | OpenCode               | 2026-09-03   | CI run `33723312212`, Worker version `39902304-6603-4718-a0e4-4513b4b25928`, clean checks   |
| SITE-005 | Refresh and merge the child-site handover package                       | Completed | OpenCode               | 2026-09-03   | Child-site PR #44 merged as `65c7dde`                                                       |
| SITE-006 | Confirm production need for automatic webhook notifications             | Open      | Richard Joo + OpenCode | TBD          | Plugin `0.2.0` automatic hooks are skipped; use an official fix or remove the plugin        |
| SITE-007 | Consume the released admin bundle optimization                          | Open      | OpenCode               | Next release | Upstream PR #2516 remains unreleased and must not be consumed through a local package       |
| SITE-008 | Continue the child site's editorial and content-continuity backlog      | Open      | Richard Joo + OpenCode | TBD          | Use child-site handover package `2026.09.03-1` for the current task list                    |
| SITE-009 | Remove the Wrangler patch after its documented upstream release trigger | Open      | OpenCode               | Next release | Remove the exact pin, package extension, and patch together after traced-build verification |
