# Cross-Reference Map

## Canonical Root Docs

| Document | References out to | Referenced by | Dependency notes |
| --- | --- | --- | --- |
| `README.md` | `CONTRIBUTING.md`, `AGENTS.md`, `TEMPLATES.md`, `docs/README.md`, `https://docs.emdashcms.com/` | none in root docs | Public starting point; should only summarize and hand off to deeper governance |
| `CONTRIBUTING.md` | `AGENTS.md`, `TEMPLATES.md`, `docs/README.md`, `demos/cloudflare/README.md`, `https://docs.emdashcms.com/...` | `README.md`, `AGENTS.md` | Human workflow source of truth for setup, PR policy, and changesets |
| `AGENTS.md` | `CONTRIBUTING.md`, `.github/PULL_REQUEST_TEMPLATE.md`, `docs/worklogs/README.md` | `README.md`, `CONTRIBUTING.md` | AI workflow source of truth; should not duplicate contributor policy beyond pointers |
| `TEMPLATES.md` | `README.md` (template gallery), repo scripts under `scripts/`, workspace template paths under `templates/` and `demos/` | `README.md`, `CONTRIBUTING.md` (indirectly through guidance links) | Template-maintenance source of truth; depends on actual package scripts and sync scripts staying aligned |
| `docs/README.md` | root `README.md`, `CONTRIBUTING.md`, `AGENTS.md`, `TEMPLATES.md`, `docs/src/content/docs/`, `docs/worklogs/` | `README.md`, `CONTRIBUTING.md` | Boundary doc between published docs operations and internal worklogs |

## Internal Worklog Docs

| Document | References out to | Purpose dependency |
| --- | --- | --- |
| `docs/worklogs/README.md` | current dated folders | Defines naming and required structure for future packages |
| `.../README.md` | all package files | Entry point for the dated handover package |
| `.../MASTER_DOCUMENTS.md` | canonical root docs | Defines scope, version basis, and source-of-truth set |
| `.../CHANGELOG.md` | canonical root docs, package files | Time-ordered record of what changed in this reconciliation |
| `.../TODO.md` | work log, verification results | Operational follow-up tracker |
| `.../CROSS_REFERENCE_MAP.md` | canonical root docs, package files | Dependency map for future editors |
| `.../WORKLOG.md` | verification commands, findings | Chronological execution record |
| `.../HANDOVER.md` | all package files | One-stop summary for the next AI |
| `.../READINESS_CHECKLIST.md` | verification commands, TODOs | Pass/warn summary of what is settled vs open |
| `.../NEXT_AI_GUIDELINES.md` | `AGENTS.md`, `docs/worklogs/README.md` | Reusable continuation rules for future AI sessions |

## Derived-Document Dependencies Worth Remembering

- `templates/*/AGENTS.md` are generated from `scripts/agents-base.md` plus each template's `AGENTS-template.md` via `scripts/sync-template-skills.sh`.
- Root governance edits do not automatically propagate into package READMEs or docs-site pages; those remain a separate follow-up scope.
- `TEMPLATES.md` is currently constrained by the real behavior of `scripts/screenshot-all-templates.mjs`, which still expects package-level `bootstrap` scripts.
