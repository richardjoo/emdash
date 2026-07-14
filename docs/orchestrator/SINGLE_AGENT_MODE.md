# Single-Agent Mode

Single-agent mode is the default for any work that changes the CMS contract across repositories.

## Required Use Cases

- Syncing `emdash-cms/emdash` into `richardjoo/emdash`
- Updating package behavior, route behavior, migrations, runtime config, or shared security posture
- Upgrading child sites to a new EmDash/Astro/Cloudflare contract
- Adding, removing, or shrinking site-local patch exceptions
- Any work where a child site's correctness depends on the exact behavior of `richardjoo/emdash`

## Ownership

- The orchestrator agent owns sequencing across repos.
- Child site repos are updated serially, not concurrently, until the contract is stable.

## Sequence

1. Fetch and assess `upstream/main` in `richardjoo/emdash`.
2. If `origin/main` is behind `upstream/main`, sync `richardjoo/emdash` before any other substantive work.
3. Apply, verify, and merge orchestrator repo changes first.
4. Decide the child-site consumption target.
   Default target is a released npm package version; if a local patch is still required, record the exception before editing child sites.
5. Update child sites one at a time.
6. Run local verification per child site.
7. Push PRs, wait for green CI, and merge in dependency order.
8. Return all local repos to clean `main`.

## Output Requirements

- The orchestrator repo must name the source-of-truth behavior.
- Every child-site PR must state what CMS version/patch state it consumes.
- Every child-site patch exception must have a removal trigger.

## Forbidden During Single-Agent Mode

- Parallel site agents making dependency or patch changes
- Site repos changing EmDash behavior locally without registry updates
- Consuming unpublished branch refs unless explicitly approved as an emergency exception
