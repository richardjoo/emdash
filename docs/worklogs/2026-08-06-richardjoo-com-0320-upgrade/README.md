# richardjoo-com 0.32.0 Upgrade

Internal AI-facing handover package for the `richardjoo-com` package alignment to released `0.32.0` completed on `2026-08-06`.

## Snapshot

- Orchestrator repo branch: `main`
- Child-site repo branch: `main`
- Child-site package-upgrade commit: `7292de6`
- Child-site consume target now pushed:
  - `emdash@0.32.0`
  - `@emdash-cms/cloudflare@0.32.0`
- Child-site local verification before push:
  - `pnpm install` passed
  - `pnpm typecheck` passed
  - `pnpm build` passed
- Email-provider runtime state carried forward from the prior pass:
  - Cloudflare Email Sending active and selected
  - notifications still route to `richardjoo@gmail.com`
  - sender/reply identity remains `aiopsforfounders@richardjoo.com`

## Scope

This package covers:

- syncing the child site from the previously pushed `0.31.1` line to the latest released `0.32.0` packages
- verifying the site locally after the package bump
- updating the orchestrator registry and central worklog index to match the new child-site baseline
