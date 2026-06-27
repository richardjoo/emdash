# Multi-Tenant Platform Architecture

This document records the current recommended architecture for future business platforms built on EmDash.

## Decision Summary

- Use one repo per vertical platform, not one repo per business tenant.
- Use one SaaS backend per vertical platform.
- Use EmDash/Astro as the public content and landing-page frontend.
- Use the SaaS backend as the system of record for users, bookings, schedules, events, inventory, and account actions.
- Let one platform serve the apex domain plus many tenant subdomains and later custom domains.

Examples:

- `myrestaurants.com` -> platform landing page
- `mytacos.myrestaurants.com` -> restaurant tenant site
- `pho123.myrestaurants.com` -> restaurant tenant site
- `mycampgrounds.com` -> platform landing page
- `campground1.mycampgrounds.com` -> campground tenant site
- `campground1.com` -> future custom-domain tenant mapped onto the same campground platform

## Repo Model

Recommended default:

- one orchestrator repo: `richardjoo/emdash`
- one child site repo per vertical platform
- no per-business repos by default

For future verticals, a new platform repo may be bootstrapped from `richardjoo/saas-template` for SaaS-side foundations and then governed from `richardjoo/emdash` as a child site or platform repo.

Important distinction:

- `richardjoo/saas-template` is a SaaS-side starter/reference repo
- it is not an EmDash frontend template
- the EmDash content/frontend layer still follows the orchestrator rules in this repository

Use a separate repo for a tenant only when at least one of these is true:

- the tenant needs major code-level divergence
- the tenant requires hard repository isolation for compliance or ownership
- the tenant has a separate release cadence and maintainer team
- the tenant is no longer a template-based platform customer and has become a bespoke product

## Deployment Model

Recommended default for each vertical platform:

- one deployed frontend application per vertical
- one SaaS backend per vertical
- one domain resolver in the frontend that maps hostnames to tenant configuration

This means the same deployment can answer:

- the platform apex domain
- platform-managed subdomains
- future custom domains

## Domain Resolver

Every request should resolve a `tenant context` from the request host.

Recommended tenant context fields:

- `platform_id`
- `tenant_id`
- `backend_tenant_id`
- `host`
- `canonical_domain`
- `platform_domain`
- `template_id`
- `theme_id`
- `branding_id`
- `locale_default`
- `status`

The resolver must support:

- apex platform landing pages
- first-party subdomains
- mapped custom domains
- disabled/suspended tenants
- canonical redirect rules

## Public Content Model

EmDash should own:

- landing pages
- marketing pages
- SEO pages
- tenant business profile pages
- content blocks, FAQs, about pages, menus, media, and theme metadata

The frontend should treat tenant pages as template-driven pages backed by:

- tenant config
- tenant-scoped CMS content
- SaaS API data where needed

Recommended content split:

- platform-shared content: content owned by the vertical itself
- tenant-scoped content: content owned by a business tenant

Tenant-scoped content must always carry an explicit tenant key or equivalent resolver-backed scope.

## Template Strategy

The platform should not become a bespoke site factory.

Recommended model:

- a limited template catalog per vertical
- constrained theme tokens per template
- no arbitrary layout editing by tenants in the first phase

Recommended tenant-configurable surface:

- logo
- colors
- headline and subheadline
- contact and location info
- hero image/media
- menu selections
- optional sections enabled/disabled
- SEO and social metadata

Avoid in the default model:

- arbitrary page structure editing
- per-tenant code branches
- per-tenant component forks

## System Of Record Boundaries

EmDash frontend / content layer owns:

- public-facing site rendering
- content entry and media editing
- SEO content
- tenant theme and branding metadata
- marketing and informational pages

SaaS backend owns:

- customer accounts
- staff accounts
- bookings / reservations
- scheduled events / appointments
- inventory / availability / pricing
- payment and operational workflows
- account deletion / deactivation / password reset / registration

## Integration Pattern

Recommended pattern:

- Astro/EmDash renders the page shell
- server-side code calls the SaaS API for transactional data
- the page combines CMS-managed content and SaaS-managed data

Examples:

- restaurant business page: EmDash content + hours/menu teaser from SaaS
- campground booking page: EmDash page framing + availability/pricing from SaaS
- event page: EmDash descriptive content + schedule status from SaaS

## Business Owner Editing Model

The stated requirement is:

- business owners can edit their own content
- your team can edit content
- AI agents can help manage content

That is possible, but only with strict tenant isolation.

Required rule:

- no tenant user may ever read or mutate another tenant's content, media, menus, sections, widgets, or settings

This means tenant scoping cannot be treated as a convenience filter. It is an authorization boundary.

## Implementation Recommendation

Phase 1:

- central team manages most content
- selected tenant staff get scoped editing rights only after the tenant model is proven

Phase 2:

- tenant staff get self-service content editing inside tenant-scoped admin surfaces
- AI agents may assist only under orchestrator rules and tenant scope constraints

## Custom Domains

Custom domains are supported by the architecture, but they increase routing and auth complexity.

Required capabilities:

- domain ownership verification
- domain-to-tenant mapping
- canonical redirect control
- per-domain session and CSRF handling
- domain-aware email links and public URLs

## Stability Recommendation

The long-term stable choice is:

- platform repos by vertical
- limited templates
- strict SaaS/content boundary
- no per-business repo proliferation by default
- no per-business code customization by default
