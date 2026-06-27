# Launch And Maintenance Playbook

This playbook is optimized for quickly onboarding many businesses while keeping the system maintainable.

## Goal

Make new business launches fast enough for go-to-market work without turning every business into a bespoke engineering project.

## The Rule

Default to configuration, not custom code.

Every time a new business requires a code fork, maintenance cost rises sharply.

## Fast Launch Model

For each vertical platform:

1. Create a tenant record
2. Map one or more domains to the tenant
3. Select a template from the approved template catalog
4. Fill the tenant config fields
5. Import or author the initial content
6. Connect the tenant to the correct SaaS backend tenant ID
7. Run domain, auth, booking, and SEO sanity checks

For a brand-new vertical, the platform repo may be initialized from `richardjoo/saas-template` for the SaaS-side foundation, while governance and documentation should still be inherited from `docs/orchestrator/templates/`.

## What Must Be Automated Eventually

- tenant record creation
- domain mapping
- starter content copy
- template assignment
- tenant branding defaults
- health checks
- content QA prompts/checklists

## What Should Stay Manual Until Stable

- schema changes
- permission model expansion
- custom domain exception handling
- cross-tenant bulk edits

## Maintenance Model

### Orchestrator-owned maintenance

- upstream syncs
- package/runtime upgrades
- security posture
- common template fixes
- platform-wide migrations

### Site/platform-owned maintenance

- content refreshes
- media updates
- tenant-specific SEO tuning
- site-local docs/runbooks

### Tenant-owned maintenance

- tenant-specific factual content
- business hours, contact info, pricing copy, menus, amenities, etc.

## AI Usage Model

Single-agent mode:

- any change that affects package contracts, dependencies, or shared platform behavior

Two-agent mode:

- allowed for tenant-local content or presentation work only after orchestrator handoff

## Default Success Criteria For A New Business Launch

- correct domain resolves to the right tenant
- landing page and core SEO pages render correctly
- branding/template selection is correct
- booking or event surfaces show live SaaS-backed data
- authenticated dashboard routes work for that tenant
- no cross-tenant leakage

## Recommendation Summary

If you want to scale this commercially, optimize for:

- limited vertical templates
- optional bootstrap from `richardjoo/saas-template` for SaaS-side foundations
- tenant configuration
- orchestrated upgrades
- documented exceptions
- strong tenant isolation

That is the model most likely to stay fast and maintainable as the number of businesses grows.
