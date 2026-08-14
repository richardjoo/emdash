# Cross-Reference Map

## Canonical Root And Orchestrator Docs

| Document                                   | References out to                                                                                                                                       | Referenced by                                                   | Dependency notes                                                                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `README.md`                                | `CONTRIBUTING.md`, `AGENTS.md`, `TEMPLATES.md`, `docs/orchestrator/README.md`, `docs/README.md`, `https://docs.emdashcms.com/`                          | none in root docs                                               | Public starting point; should summarize and hand off to deeper governance                   |
| `CONTRIBUTING.md`                          | `AGENTS.md`, `TEMPLATES.md`, `TRIAGE.md`, `docs/README.md`, `demos/cloudflare/README.md`, docs site URLs                                                | `README.md`, `AGENTS.md`                                        | Human workflow source of truth for setup, PR policy, and changesets                         |
| `AGENTS.md`                                | `CONTRIBUTING.md`, `.github/PULL_REQUEST_TEMPLATE.md`, `docs/orchestrator/README.md`, `docs/worklogs/README.md`                                         | `README.md`, `CONTRIBUTING.md`, `.claude/CLAUDE.md` via symlink | AI workflow source of truth for repo rules; now also locks in the sync-first rule for forks |
| `TEMPLATES.md`                             | `README.md`, `scripts/sync-cloudflare-templates.sh`, `scripts/sync-blog-demos.sh`, `scripts/screenshot-all-templates.mjs`, `templates/screenshots.json` | `README.md`, `CONTRIBUTING.md`                                  | Template-maintenance source of truth; depends on the real screenshot harness behavior       |
| `docs/README.md`                           | root `README.md`, `CONTRIBUTING.md`, `AGENTS.md`, `TEMPLATES.md`, `docs/src/content/docs/`, `docs/orchestrator/`, `docs/worklogs/`                      | `README.md`, `CONTRIBUTING.md`                                  | Boundary doc between published docs operations and internal governance/worklogs             |
| `docs/orchestrator/README.md`              | `SINGLE_AGENT_MODE.md`, `TWO_AGENT_HANDOFF_CONTRACT.md`, `CHILD_SITE_REGISTRY.md`, other orchestrator governance docs                                   | `README.md`, `AGENTS.md`, worklog packages                      | Cross-repo governance overview and dependency policy                                        |
| `docs/orchestrator/SINGLE_AGENT_MODE.md`   | `upstream/main`, `richardjoo/emdash`, child-site repos                                                                                                  | `docs/orchestrator/README.md`, worklog packages                 | Authoritative sequence for sync-first, single-agent cross-repo work                         |
| `docs/orchestrator/CHILD_SITE_REGISTRY.md` | child-site repos and their documented consume targets                                                                                                   | `docs/orchestrator/README.md`, worklog packages                 | Source of truth for child-site package state and patch exceptions                           |
| `docs/worklogs/README.md`                  | current dated folders                                                                                                                                   | `AGENTS.md`, worklog packages                                   | Defines naming, required files, and indexing rules for dated handover packages              |

## Cross-Repo Child-Site State Sources

| External source                      | Purpose dependency                                                     |
| ------------------------------------ | ---------------------------------------------------------------------- |
| `richardjoo-com/package.json`        | Source of truth for the child site's consumed package versions         |
| `richardjoo-com/pnpm-workspace.yaml` | Source of truth for workspace-level patch exceptions or their removal  |
| `richardjoo-com/README.md`           | Documents child-site verification commands and current operating notes |
| `richardjoo-com/AGENTS.md`           | Captures child-site-specific implementation rules and doc references   |

## Internal Worklog Docs

| Document                     | References out to                                                   | Purpose dependency                                        |
| ---------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------- |
| `docs/worklogs/README.md`    | current dated folders                                               | Defines naming and required structure for future packages |
| `.../README.md`              | all package files                                                   | Entry point for the dated handover package                |
| `.../MASTER_DOCUMENTS.md`    | canonical root docs, orchestrator docs, child-site package state    | Defines scope, version basis, and source-of-truth set     |
| `.../CHANGELOG.md`           | canonical docs, orchestrator docs, repo commits, child-site commits | Time-ordered record of what changed in this pass          |
| `.../TODO.md`                | work log, verification results, registry state                      | Operational follow-up tracker                             |
| `.../CROSS_REFERENCE_MAP.md` | canonical docs, orchestrator docs, child-site state files           | Dependency map for future editors                         |
| `.../WORKLOG.md`             | verification commands, sync actions, findings                       | Chronological execution record                            |
| `.../HANDOVER.md`            | all package files                                                   | One-stop summary for the next AI                          |
| `.../READINESS_CHECKLIST.md` | verification commands, TODOs, registry state                        | Pass/warn summary of what is settled vs open              |
| `.../NEXT_AI_GUIDELINES.md`  | `AGENTS.md`, orchestrator docs, `docs/worklogs/README.md`           | Reusable continuation rules for future AI sessions        |

## Derived Dependencies Worth Remembering

- `.claude/CLAUDE.md` is a symlink to `AGENTS.md`, so broken relative Markdown links there become agent-facing doc bugs.
- `scripts/screenshot-all-templates.mjs` is the operational dependency behind the `TEMPLATES.md` screenshot note.
- `docs/orchestrator/CHILD_SITE_REGISTRY.md` depends on the actual child-site package and patch state, not just what the child-site README says.
- After source changes in this monorepo, `pnpm build` may be needed before `pnpm typecheck` gives a clean package-wide result.
