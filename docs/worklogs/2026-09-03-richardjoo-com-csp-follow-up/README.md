# richardjoo-com CSP follow-up

Internal AI-facing handover package for the fork synchronization and the `richardjoo-com` Cloudflare Web Analytics Content Security Policy (CSP) remediation completed on `2026-09-03`.

## Snapshot

- Upstream anchor: `emdash-cms/emdash@264940dc`
- Fork sync branch merge: `53878ed6`
- Fork sync PR: richardjoo/emdash#15, merge `3d44a44d`
- Fork divergence after the final fetch: `66` commits ahead and `0` behind `upstream/main`
- Child-site public CSP merge: PR #45, commit `27fe2a5`
- Child-site admin exclusion merge: PR #46, commit `e1b48a0`
- Child-site handover merge: PR #47, commit `9e068a6`
- Child-site handover package: `2026.09.03-2`
- Current Worker version: `b9f0a711-f718-4e36-ba42-9ea0f7a3e326`
- Child-site consume target remains `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0` from npm

## Outcome

Public HTML loads Cloudflare's Subresource Integrity (SRI)-protected analytics beacon and posts Real User Monitoring (RUM) data to the same-origin `/cdn-cgi/rum` endpoint. `/_emdash` HTML adds `no-transform` to its cache policy, so Cloudflare does not inject the beacon into pages protected by EmDash's stricter CSP.

Production browser checks passed on the desktop homepage, the mobile `Work With Me` page, and the anonymous admin redirect/login flow. Routine-token MCP `initialize` and `settings_get` calls also passed.

## Scope

This package records:

- the ancestry-preserving upstream sync before child-site work
- the Cloudflare Web Analytics intent and CSP investigation
- the path-scoped public beacon allowance
- the `/_emdash` analytics-injection exclusion
- both production deployments and final browser verification
- child-site handover package `2026.09.03-2`
- the current orchestrator registry state

No package version, database schema, production content, secret, or Cloudflare account-level Web Analytics setting changed.
