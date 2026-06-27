# Tenant Content And Operations Model

This document defines how business owners, your team, and AI agents should share ownership of tenant content safely.

## Actors

- Platform operators: your internal team
- Tenant operators: business owners and their authorized staff
- AI agents: assistant agents acting under orchestrator rules

## Core Principle

Tenant scope is an authorization boundary, not a convenience filter.

Every actor must only be able to read or modify content within the tenant scope they are authorized for.

## Recommended Ownership Model

Platform operators own:

- template catalog
- global theme system
- shared collections and schema rules
- platform landing pages
- global SEO rules
- cross-tenant operations and migrations

Tenant operators own:

- their own business profile content
- their own menus, locations, media, FAQs, and page content
- tenant-specific branding values allowed by the template catalog

AI agents may assist with:

- content drafting
- content cleanup
- media placement
- page QA
- site-local operational checks

AI agents must not:

- cross tenant boundaries without explicit orchestrator authorization
- redefine package behavior from a tenant repo
- mutate another tenant's content as a side effect of local work

## Minimum Tenant-Aware Data You Need

At a minimum, each tenant-scoped item should be traceable to:

- `tenant_id`
- `platform_id`
- `backend_tenant_id`
- `status`

This applies to:

- content entries
- media
- menus
- widget areas
- sections
- SEO metadata

## Tenant Editing Strategy

Recommended phased rollout:

### Phase 1

- your team remains the main editor
- tenant self-service is limited
- AI agents help your team move faster

### Phase 2

- tenant users receive scoped editing access
- role-based authoring is introduced per tenant
- AI agents may assist only inside the tenant boundary

This phased approach is safer than opening self-service editing to all tenants immediately.

## Operational Safety Rules

- cross-tenant bulk operations require orchestrator review
- schema changes are always orchestrator-owned
- tenant content imports must be tenant-targeted and reversible where possible
- site-local patches must be registry-tracked exceptions only

## Content Velocity Strategy

To make onboarding fast and maintainability high:

- restrict each vertical to a small number of templates
- use structured tenant configuration instead of custom code
- maintain reusable AI prompts and checklists by template
- automate tenant creation, domain mapping, and starter content where possible

## Recommendation Summary

The fast path is not “custom websites for every business.”

The fast path is:

- one platform repo per vertical
- many tenant sites from a controlled template catalog
- strict tenant scoping
- orchestrator-owned schema and package contract
- tenant-owned content inside safe boundaries
