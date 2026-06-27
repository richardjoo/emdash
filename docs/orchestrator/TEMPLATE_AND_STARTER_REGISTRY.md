# Template And Starter Registry

This registry tracks orchestrator-governed starter and reference repositories that are not themselves live child CMS sites.

## Purpose

- distinguish reusable starter assets from deployed child sites
- record how future verticals can inherit SaaS-side foundations
- prevent confusion between EmDash frontend templates and SaaS platform templates

## Registry Columns

| Template / Starter | Repo | Local path | Role | Classification | Current use | Governance mode | Docs baseline | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SaaS Template | `richardjoo/saas-template` | `/home/rjoo/code/projects/saas-template/` | Reference repo for future verticals; intended to accelerate new vertical launches because roughly 50% to 80% of basic SaaS foundations already exist there | Generic multi-tenant SaaS frontend and backend template for many verticals; not an EmDash frontend template | Not used by `richardjoo/richardjoo-com` at the moment | Single-agent mode for cross-repo and platform-contract changes; two-agent mode allowed for local template work under orchestrator handoff | Future vertical repos should inherit from both `docs/orchestrator/templates/` and `richardjoo/saas-template` as applicable | Provisional; current understanding may change later | Record only for now; inspect and refine later when the first new vertical platform is started |

## Rules

- Do not list live child sites here; live child sites belong in `CHILD_SITE_REGISTRY.md`.
- Do not treat a starter repo as a production platform without first creating a child-site registry entry for the resulting live repo.
- Template and starter repos follow the same orchestrator governance rules for dependency, patch, and contract work.
- `richardjoo/saas-template` is SaaS-side infrastructure and product foundation, not an EmDash CMS frontend template.
