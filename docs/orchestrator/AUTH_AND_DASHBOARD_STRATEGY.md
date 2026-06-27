# Auth And Dashboard Strategy

This document records the recommended authentication and private-dashboard model for future EmDash-powered vertical platforms.

## User Requirement Summary

- Users should not stay signed in across different parent domains.
- `myrestaurants.com` and `mycampgrounds.com` are separate auth realms.
- Future custom domains are expected.
- Users must be able to manage accounts and scheduled/booked items.

## Auth Boundary Decision

Recommended default:

- one auth realm per vertical platform
- no cross-parent-domain shared session requirement
- no mandatory SSO across verticals

This means:

- `myrestaurants.com` users do not share browser session state with `mycampgrounds.com`
- each vertical can use its own session cookies and login flows

## Important Custom-Domain Implication

Even within one vertical, future custom domains mean cookies cannot be assumed to work across all tenant hosts.

Examples:

- `.myrestaurants.com` cookies can cover `mytacos.myrestaurants.com`
- but they cannot cover `mytacos.com`

Therefore the durable design is:

- the SaaS backend is the identity source of truth
- each visited host gets its own domain-local frontend session
- the frontend performs a tenant-aware auth handshake with the SaaS backend when needed

## Account Management Ownership

Recommended default:

- SaaS backend owns account lifecycle
- EmDash frontend provides UI pages and calls backend APIs

SaaS-owned actions:

- login
- logout
- register
- reset password
- deactivate account
- delete account
- account profile changes
- booking/event management

## Dashboard Placement Recommendation

The requirement suggests tenant-specific private dashboards inside the public site. This is possible, but it must not be implemented as CMS-managed content.

Recommended long-term architecture:

- keep the public site and dashboard in the same repo/deployment per vertical
- separate them by route groups and responsibility

Suggested route split:

- public CMS/content routes: `/`, `/about`, `/locations/...`, `/book`, `/faq`, etc.
- private app routes: `/account`, `/dashboard`, `/bookings`, `/events`, `/settings`

The dashboard routes should:

- use SaaS auth/session state
- call SaaS APIs directly from trusted server-side code
- not depend on EmDash as the transactional store

## Why This Is Better Than Putting Dashboard State Into EmDash

- transactional data belongs in the SaaS domain model
- authorization rules stay centralized
- account and booking logic do not leak into CMS content structures
- public content and private app surfaces can evolve independently inside the same codebase

## Fallback If Complexity Rises

If same-deployment private dashboards become too complex for a given vertical, the next safest fallback is:

- keep the public site on the EmDash frontend
- host the private app at a dedicated app entrypoint such as `app.myrestaurants.com`
- link between the public site and the SaaS app cleanly

This fallback is still consistent with the orchestrator model.

## Session Rules

- No cross-vertical shared sessions
- Domain-local sessions only
- Custom domains receive independent sessions for that host
- Backend tokens or identity assertions must never assume shared parent-domain cookies

## Authorization Rules

- content editing permissions are tenant-scoped
- dashboard/account permissions are SaaS-scoped
- no dashboard action should trust CMS ownership alone

## Recommendation Summary

Best default:

- public content shell from EmDash
- private dashboard routes in the same platform repo/deployment
- SaaS backend for all identity and transactional actions
- no cross-parent-domain sign-in assumption
