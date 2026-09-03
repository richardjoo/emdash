# Handover summary

## Scope

This pass completed the production upgrade of `richardjoo-com` from released EmDash `0.33.0` to `0.36.0`, including backup, migrations, deployment, live verification, and site-local handover maintenance.

## Current state

`richardjoo-com` now consumes:

- `emdash@0.36.0`
- `@emdash-cms/cloudflare@0.36.0`
- `astro@7.0.3`
- `@astrojs/cloudflare@14.0.1`
- `wrangler@4.104.0` with the documented temporary `punycode` patch

Production is on child-site runtime merge `5bea6d2` and Cloudflare Worker version `39902304-6603-4718-a0e4-4513b4b25928`. D1 has all migrations through `073_media_focal_point` with no pending or unknown migrations. Child-site handover version `2026.09.03-1` is merged at `65c7dde`.

## Open work

- Continue navigation cleanup, content reconciliation, and production snapshot planning from the child-site handover.
- Confirm whether the site requires automatic webhook delivery. Plugin version `0.2.0` lacks required capabilities, so its automatic hooks are skipped.
- Keep the admin bundle optimization pending until upstream PR #2516 ships in an official release.
- Keep the Wrangler patch until the release containing workers-sdk #14843 passes the documented traced-build check.

No EmDash package patch, workspace link, Git dependency, preview build, or tarball is active in the child site.
