# Master Documents

## Version Basis

This package is keyed to the current orchestrator repo state after confirming that local `main` already includes `upstream/main` through merge commit `c65b440b`.

| Scope | Version basis |
| --- | --- |
| Workspace root | `1.0.0` |
| Core release family | `emdash@0.31.1`, `@emdash-cms/admin@0.31.1`, `@emdash-cms/auth@0.31.1`, `@emdash-cms/blocks@0.31.1`, `@emdash-cms/cloudflare@0.31.1`, `create-emdash@0.31.1`, `@emdash-cms/gutenberg-to-portable-text@0.31.1`, `@emdash-cms/x402@0.31.1` |
| Audit anchor | `emdash@c65b440b` verified on `2026-07-30` |

## Canonical Notes

- The orchestrator repo is again current with `upstream/main` in the behind/ahead sense that matters for future work.
- The previously staged child-site target of `0.30.0` is now stale relative to the orchestrator repo; any further child-site dependency alignment should target `0.31.1`.
