# Changelog

## 2026-09-03

- Synchronized the fork through upstream `264940dc` in richardjoo/emdash#15; merge `3d44a44d` leaves the fork `66` commits ahead and `0` behind.
- Merged child-site PR #45 to allow Cloudflare's base and versioned Web Analytics beacon paths on public HTML.
- Merged child-site PR #46 to exclude `/_emdash` HTML from analytics injection with `no-transform`.
- Verified public beacon responses and same-origin RUM posts, confirmed that admin retains its stricter CSP without an injected beacon, and repeated routine-token MCP checks.
- Recorded deployment run `33811157462` and active Worker version `b9f0a711-f718-4e36-ba42-9ea0f7a3e326`.
- Merged child-site PR #47 with handover package version `2026.09.03-2`.
- Updated the orchestrator child-site registry and added this follow-up package.
