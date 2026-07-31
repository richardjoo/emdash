# Changelog

## 2026-07-30

- Updated `richardjoo-com` from released `0.30.0` packages to released `0.31.1` packages.
- Added the Cloudflare Email Sending plugin to `richardjoo-com/astro.config.mjs`.
- Added the `send_email` Worker binding (`EMAIL`) to `richardjoo-com/wrangler.jsonc`.
- Verified `pnpm typecheck` and `pnpm build` locally in the child-site repo.
- Deployed the child site and confirmed the live provider now appears as available and selected.
- Confirmed that live delivery is still blocked by the destination-address verification requirement.
