# Worklogs

Internal AI-facing project operations records. This directory is not published to `docs.emdashcms.com`.

## Purpose

- Store dated handover packages, documentation reconciliations, and project-state snapshots.
- Keep canonical governance in the root docs; use worklogs for time-bound status, decisions, TODOs, and handoffs.

## Naming

- Create one folder per package using `YYYY-MM-DD-short-slug/`.
- Keep the slug short, specific, and stable for the life of that work package.

## Expected Files

- `README.md`
- `MASTER_DOCUMENTS.md`
- `CHANGELOG.md`
- `TODO.md`
- `CROSS_REFERENCE_MAP.md`
- `WORKLOG.md`
- `HANDOVER.md`
- `READINESS_CHECKLIST.md`
- `NEXT_AI_GUIDELINES.md`

## Update Rules

- Update the canonical root document first when a source-of-truth rule changes, then record the change here.
- Use explicit status, owner, and due-date fields in TODO trackers; use `TBD` when the source of truth does not define them.
- Keep historical folders intact. Start a new dated folder for a new handover or reconciliation pass.
- Cross-link every new folder from this index.

## Current Packages

- [`2026-06-25-current-fork-doc-reconciliation/`](2026-06-25-current-fork-doc-reconciliation/README.md) -- canonical root-doc reconciliation and AI handover package for the current fork state.
