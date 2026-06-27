# Child Site Document Standard

Each child site repo may keep additional site-specific docs, but the orchestrator requires a minimum shared documentation set. This standard applies to both single-brand sites and multi-tenant vertical platform repos.

## Required Files

- `AGENTS.md` -- site-local AI rules, commands, key files, and known constraints
- `README.md` -- human overview, main URLs, setup, validation, and deployment summary
- `docs/runbook.md` -- operational runbook for deploy, rollback, backup, restore, secrets, and incident handling
- `docs/site-status.md` -- current CMS consumption state, patch exceptions, local sanity status, and open risks

Recommended for multi-tenant platform repos:

- `docs/tenant-model.md` -- tenant resolver inputs, tenant config schema, and domain mapping rules
- `docs/template-catalog.md` -- supported tenant templates/themes and what each one may customize

## Allowed Extras

- image prompt docs
- content planning docs
- backup/restore rehearsal docs
- site-specific SEO/content inventories
- design language references

## Ownership Split

- The orchestrator repo owns the minimum standard and templates.
- Child site repos own site-specific content inside those files.
- The orchestrator may update common structure, shared sections, and policy language across child sites.

## Patch Exception Recording

If a child site carries a local patch, `docs/site-status.md` must state:

- patch file path
- why it exists
- what upstream or fork PR/commit contains the real fix
- what release/condition removes it

## New Site Bootstrap Rule

New child site repos should start from the templates under `docs/orchestrator/templates/` and then extend them locally.

If a future vertical is bootstrapped from `richardjoo/saas-template`, the resulting repo should inherit from both:

- `docs/orchestrator/templates/` for governance and documentation structure
- `richardjoo/saas-template` for SaaS-side application foundations

Clarification: `richardjoo/saas-template` is not an EmDash frontend template. It is a SaaS-side starter/reference repo.
