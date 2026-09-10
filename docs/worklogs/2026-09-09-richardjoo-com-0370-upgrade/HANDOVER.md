# Handover summary

## Scope

This pass synchronized the fork through upstream `44114afd` and completed the `richardjoo-com` production upgrade from released EmDash `0.36.0` to `0.37.0`, including backup, migration, deployment, live verification, and site-local handover maintenance.

## Current state

The fork sync merge is `94b54ad9a` from PR #19. The last fetch comparison reports `74` commits ahead and `0` behind `upstream/main`; post-merge CI run `34428540344` passed.

The child site consumes:

- `emdash@0.37.0`
- `@emdash-cms/cloudflare@0.37.0`
- `@emdash-cms/plugin-forms@0.2.6`
- `astro@7.0.3`
- `@astrojs/cloudflare@14.0.1`
- `wrangler@4.104.0` with the documented temporary `punycode` patch

Child-site `main` is `ad0ba5a`. Runtime merge `1a742f3` from PR #50 deployed through run `34436915120`; documentation merge `ad0ba5a` from PR #51 contains handover package `2026.09.09-1`.

Production runs Worker `55e5ec6c-36d6-4c25-b80f-1117ec2bbb73`. D1 has every known migration through `074_content_deleted_scheduled_index`, no pending or unknown migrations, and the expected replacement index on both content tables. The pre-migration backup is artifact `d1-backup-my-emdash-site-20260910T034017Z` from run `34434143085`; its checksum and gzip tests passed.

Public routes, the active AI Ops form, admin login, public/admin CSP boundaries, Web Analytics resources, routine-PAT MCP reads, and the exact four-item primary menu passed production checks. No live content, menu, form, or Cloudflare account state changed.

## Compatibility note

EmDash `0.37.0` requires `_rev` for MCP `content_update`, `content_publish`, `content_unpublish`, and `content_discard_draft`. Read the item first and pass the token through unchanged. If the write returns `CONFLICT`, read the item again before retrying.

## Rollback

Cloudflare can roll the Worker back to the preceding version `dfab1e44-cea7-4b6b-be94-56c18b429ea6` if a runtime regression appears. Migration `074` is forward-only and changes index shape only; do not run a down migration. Use the verified D1 backup and the child site's recovery plan only for a database recovery event.

## Open work

- Reconcile evergreen page and footer/social drift from child tasks T08 and T09.
- Define a safe production content snapshot/export process from child task T10.
- Confirm whether the site requires automatic webhook delivery. Plugin version `0.2.0` lacks required capabilities, so its automatic hooks remain skipped.
- Consume the separate admin bundle optimization only after it ships in an official release.
- Keep the Wrangler patch until the release containing workers-sdk #14843 passes the documented traced-build check.

No EmDash package patch, workspace link, Git dependency, preview build, tarball, or production seed operation is active in the child site.
