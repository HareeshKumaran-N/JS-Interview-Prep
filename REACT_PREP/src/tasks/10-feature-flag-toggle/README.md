# Feature Flag Toggle

## Problem Statement

Build a `FeatureFlag` component that fetches a feature flag's value from a
(mock) API and conditionally renders its children only when the flag is
enabled — while it's loading, render nothing (or a fallback); if the fetch
fails, fail closed (treat as disabled). Asked close to verbatim in
Atlassian-style rounds.

## Functional Requirements

- Accept a `flagKey` prop and fetch its boolean value from a mock API on mount.
- Render `children` only when the flag resolves to `true`.
- Render an optional `fallback` while loading or when the flag is `false`/errored.
- Re-fetch if `flagKey` changes.

## Edge Cases / Bonus

- Cache flag results so repeated mounts of the same `flagKey` don't refetch.
- Support a `children` render-prop form: `children: (enabled: boolean) => ReactNode`.
- Handle request errors distinctly (log them) while still failing closed.
- Ignore stale responses if `flagKey` changes before the first request resolves.

## Suggested Time Box

30–40 minutes
