# Master Documents

## Version Basis

This handover package is keyed to the current fork state, not `upstream/main`.

| Scope                    | Version basis                                                                                                                                                                                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Workspace root           | `1.0.0`                                                                                                                                                                                                                                                               |
| Core release family      | `0.21.0` for `emdash`, `@emdash-cms/admin`, `@emdash-cms/auth`, `@emdash-cms/blocks`, `@emdash-cms/cloudflare`, `create-emdash`, `@emdash-cms/gutenberg-to-portable-text`, `@emdash-cms/x402`                                                                         |
| Other published packages | `@emdash-cms/auth-atproto@0.2.17`, `@emdash-cms/plugin-cli@0.6.0`, `@emdash-cms/plugin-types@0.1.0`, `@emdash-cms/registry-client@0.3.2`, `@emdash-cms/registry-lexicons@0.1.1`, `@emdash-cms/sandbox-workerd@0.1.9`, `@emdash-cms/contentful-to-portable-text@0.1.0` |
| Templates and demos      | current private package set at `0.0.3`                                                                                                                                                                                                                                |
| Audit anchor             | `main@bbf61e00` on `2026-06-25`                                                                                                                                                                                                                                       |

## Canonical Document Set

| Document          | Audience                     | Role                                   | Status after this pass | Notes                                                                                                      |
| ----------------- | ---------------------------- | -------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| `README.md`       | Public / contributors        | Top-level product and repo overview    | Updated                | Removed stale manual seed step, corrected auth role summary, added cross-links to canonical guides         |
| `CONTRIBUTING.md` | Contributors                 | Workflow, policy, PR rules, changesets | Updated                | Added root-level demo command and explicit links to template/docs guides                                   |
| `AGENTS.md`       | AI agents                    | Repository-specific engineering rules  | Updated                | Added `docs/worklogs/` convention and `.nvmrc` reminder                                                    |
| `TEMPLATES.md`    | Contributors / maintainers   | Template workflow and maintenance      | Updated                | Replaced stale `bootstrap` quick start with current auto-seed flow; documented screenshot harness mismatch |
| `docs/README.md`  | Docs maintainers / AI agents | Docs subproject operations             | Updated                | Distinguished published docs from internal worklogs and linked back to canonical root docs                 |

## Canonical Decisions Locked In

- Update docs against the current fork state as-is, not against `upstream/main`.
- Treat the five files above as the canonical/root governance set for this pass.
- Keep internal AI-facing state in `docs/worklogs/`, not in the published docs tree.
- Use existing package versions from the current fork as the version basis for handover materials.

## Consolidated Accuracy Notes

- Demo and template seeding is automatic on the first request when the database is empty.
- Manual `seed` / `bootstrap` steps in canonical root docs were stale and have been removed or reframed.
- Template screenshot automation is still not aligned with that seed workflow; this remains an open operational item, not a canonical-doc ambiguity.
