# Handover summary

## Scope

This pass synchronized the fork through upstream `108c753b`, simplified and deployed the `richardjoo-com` navigation, reconciled the live primary menu with the seed intent, verified production responsively, and refreshed the child-site handover.

## Current state

The fork's sync merge is `e64a0cdf` from PR #17. The last fetch comparison reports `70` commits ahead and `0` behind `upstream/main`; main CI run `33942319465` passed.

The child site remains on released `emdash@0.36.0` and `@emdash-cms/cloudflare@0.36.0`. Its current runtime behavior merge is `fd6a0e9` from PR #48, and its current documentation merge is `3d78e76` from PR #49.

Production runs Worker `dfab1e44-cea7-4b6b-be94-56c18b429ea6`. The live English `primary` menu `01KS6WKFYPC9ZVSY5FH5TWZ6KY` contains `Posts`, `Projects`, `About`, and `Work With Me`. The wordmark links home; the hero contains `Start Here` and `Work With Me`; the homepage's "More About Me" section contains `Now`, `Uses`, and `Elsewhere`.

Production verification passed at `1440`, `981`, `980`, `768`, and `390px` in light and dark modes. All linked routes returned `200`, browser/network checks were clean, and the existing public/admin CSP split remains intact. Child handover package `2026.09.04-1` contains the site-local evidence and operating policy.

## Rollback

Use the routine PAT against `https://richardjoo.com` and call atomic `menu_set_items` for menu `primary`, locale `en`, with the previous order: `Home`, `Start Here`, `Posts`, `Projects`, `Work With Me`, `About`, `Uses`, `Now`, `Elsewhere`. Do not seed production.

## Open work

- Reconcile evergreen page and footer/social drift from child tasks T08 and T09.
- Define a safe production content snapshot/export process from child task T10.
- Confirm whether the site requires automatic webhook delivery. Plugin version `0.2.0` lacks required capabilities, so its automatic hooks remain skipped.
- Keep the Wrangler patch until the release containing workers-sdk #14843 passes the documented traced-build check.

No EmDash package patch, workspace link, Git dependency, preview build, tarball, database migration, or Cloudflare account-level change was introduced by this rollout.
