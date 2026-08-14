# Master Documents

## Version Basis

This handover package is keyed to the current fork state after syncing `richardjoo/emdash` with `upstream/main` and upgrading `richardjoo-com` to released packages.

| Scope                     | Version basis                                                                                                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Workspace root            | `1.0.0`                                                                                                                                                                                                                                  |
| Core release family       | `emdash@0.28.1`, `@emdash-cms/admin@0.28.1`, `@emdash-cms/auth@0.28.1`, `@emdash-cms/blocks@0.28.1`, `@emdash-cms/cloudflare@0.28.1`, `create-emdash@0.28.1`, `@emdash-cms/gutenberg-to-portable-text@0.28.1`, `@emdash-cms/x402@0.28.1` |
| Other published packages  | `@emdash-cms/auth-atproto@0.2.27`, `@emdash-cms/plugin-cli@0.6.0`, `@emdash-cms/registry-client@0.3.2`, `@emdash-cms/registry-lexicons@0.1.1`, `@emdash-cms/sandbox-workerd@0.1.19`, `@emdash-cms/contentful-to-portable-text@0.1.0`     |
| Child-site consume target | `richardjoo-com` uses `emdash@0.28.1`, `@emdash-cms/cloudflare@0.28.1`, `astro@7.0.3`, `@astrojs/cloudflare@14.0.1`, `@emdash-cms/plugin-forms@0.2.4`, `@emdash-cms/plugin-webhook-notifier@0.2.0`                                       |
| Audit anchor              | `emdash@e9011e0f`, `richardjoo-com@4bbe2e4` on `2026-07-14`                                                                                                                                                                              |

## Canonical Document Set

| Document                                   | Audience                     | Role                                                     | Status after this pass | Notes                                                                                                                   |
| ------------------------------------------ | ---------------------------- | -------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `README.md`                                | Public / contributors        | Product overview and repo entry point                    | Verified               | Cross-links remain current; no substantive edits were needed in this pass                                               |
| `CONTRIBUTING.md`                          | Contributors                 | Workflow, policy, PR rules, changesets                   | Verified               | Current guidance remained accurate after the upstream sync                                                              |
| `AGENTS.md`                                | AI agents                    | Repository-specific engineering rules                    | Updated                | Fixed the symlink/tool-directory note, made fork sync mandatory when behind, and clarified dirty-lint baseline handling |
| `TEMPLATES.md`                             | Contributors / maintainers   | Template workflow and maintenance                        | Verified               | Screenshot harness mismatch is still accurately documented                                                              |
| `docs/README.md`                           | Docs maintainers / AI agents | Docs subproject boundary and operations                  | Verified               | Published-docs vs internal-worklogs boundary remains accurate                                                           |
| `docs/orchestrator/README.md`              | Orchestrator agents          | Cross-repo governance overview                           | Updated                | Added an explicit hard rule that fork sync is mandatory before substantive work if behind upstream                      |
| `docs/orchestrator/SINGLE_AGENT_MODE.md`   | Orchestrator agents          | Authoritative cross-repo execution sequence              | Updated                | Clarified the sync-first sequence and cleaned up the child-site-target step wording                                     |
| `docs/orchestrator/CHILD_SITE_REGISTRY.md` | Orchestrator agents          | Child-site consume state and patch exceptions            | Updated                | `richardjoo-com` now records released `0.28.1` packages and `none` for the patch exception                              |
| `docs/worklogs/README.md`                  | AI agents                    | Worklog naming, required files, and active package index | Updated                | Added this dated handover package to the index                                                                          |

## Canonical Decisions Locked In

- If `origin/main` is behind `upstream/main`, syncing the fork is mandatory before any other substantive work.
- After the fork is current, affected child sites are updated serially under orchestrator governance.
- Child sites consume released npm packages by default; local patch exceptions are temporary and must be removed once the needed fix lands in a consumed release.
- `richardjoo-com` now consumes released `emdash@0.28.1` and `@emdash-cms/cloudflare@0.28.1` with no local EmDash patch.
- Internal AI-facing status belongs in `docs/worklogs/` as a new dated folder per handover pass.

## Consolidated Accuracy Notes

- The actual symlinked AI-doc layout in this checkout is `.claude/CLAUDE.md` -> `../AGENTS.md` and `.claude/skills` -> `../skills`.
- There is no root `CLAUDE.md` symlink and no `.opencode/skills` symlink in this checkout.
- `pnpm lint:quick` and `pnpm lint:json` currently panic inside `oxlint` under Node `22.22.2`; treat that as an existing repo issue.
- `pnpm build` currently passes, and `pnpm typecheck` passes after the fresh build.
- `scripts/screenshot-all-templates.mjs` still invokes `pnpm bootstrap`, while the template packages do not define `bootstrap`.
- The local `richardjoo-com` checkout is not currently clean even though `origin/main` contains the verified upgrade commit; newer uncommitted docs changes exist there and must be inspected before more child-site work.
