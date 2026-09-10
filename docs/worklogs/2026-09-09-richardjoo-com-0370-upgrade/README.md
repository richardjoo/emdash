# richardjoo-com 0.37.0 upgrade

Internal AI-facing handover package for the fork synchronization and completed `richardjoo-com` production upgrade from released EmDash `0.36.0` to `0.37.0` on `2026-09-09`.

## Snapshot

- EmDash release: tag `emdash@0.37.0`, commit `fc87efeb`
- Upstream anchor: `emdash-cms/emdash@44114afd`
- Fork sync: PR #19, branch commit `bbc36d658`, merge `94b54ad9a`
- Fork divergence after the final fetch: `74` commits ahead and `0` behind `upstream/main`
- Child-site package upgrade: commit `9d2a47d`, PR #50, merge `1a742f3`
- Child-site handover: commit `1ac9b9b`, PR #51, merge `ad0ba5a`, package `2026.09.09-1`
- Child-site consume target:
  - `emdash@0.37.0`
  - `@emdash-cms/cloudflare@0.37.0`
  - `@emdash-cms/plugin-forms@0.2.6`
  - `astro@7.0.3`
  - `@astrojs/cloudflare@14.0.1`
  - `wrangler@4.104.0` with the existing documented patch
- Production evidence:
  - backup run `34434143085` produced `d1-backup-my-emdash-site-20260910T034017Z`
  - migration `074_content_deleted_scheduled_index` applied successfully
  - CI run `34436915120` activated Worker `55e5ec6c-36d6-4c25-b80f-1117ec2bbb73`
  - public routes, forms, admin login, CSP boundaries, Web Analytics resources, routine-PAT MCP reads, and post-deploy migration status passed

## Outcome

The child site now runs official EmDash `0.37.0` packages. Production D1 has every known migration through `074_content_deleted_scheduled_index`, with no pending or unknown migrations. The primary navigation and live content remained unchanged.

MCP clients must pass the `_rev` returned by `content_get` to `content_update`, `content_publish`, `content_unpublish`, and `content_discard_draft`. A stale token returns `CONFLICT` and requires another read before retrying.

## Scope

This package records:

- the ancestry-preserving upstream fork sync required before child-site work
- release and compatibility review for EmDash `0.37.0`
- child-site dependency, lockfile, local verification, and CI results
- the fresh production D1 backup and serialized migration apply
- production deployment, Worker version, and live checks
- child-site handover package `2026.09.09-1`
- the current orchestrator child-site registry state

Production D1 was not seeded. No content, menu, form, Cloudflare binding, account setting, EmDash package patch, workspace link, Git dependency, preview build, or tarball was introduced.
