# Changelog

## 2026-09-04

- Synchronized the fork through upstream `108c753b` in richardjoo/emdash#17; merge `e64a0cdf` leaves the fork `70` commits ahead and `0` behind.
- Merged child-site PR #48 as `fd6a0e9` to simplify the primary navigation, reorganize homepage links, and split the header and footer responsive breakpoints.
- Recorded deployment run `33942840298` and active Worker version `dfab1e44-cea7-4b6b-be94-56c18b429ea6`.
- Replaced the live English `primary` menu atomically with `Posts`, `Projects`, `About`, and `Work With Me` and verified it through MCP read-after-write.
- Verified production at `1440`, `981`, `980`, `768`, and `390px` in light and dark modes, plus every linked route and the existing CSP boundaries.
- Merged child-site PR #49 as `3d78e76` with handover package version `2026.09.04-1`; its documentation-only workflow did not redeploy.
- Updated the orchestrator child-site registry and added this rollout package.
