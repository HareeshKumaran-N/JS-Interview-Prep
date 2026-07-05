# Custom useFetch Hook

## Problem Statement

Build a reusable `useFetch<T>(url)` hook that exposes `{ data, loading, error }`,
refetches when the URL changes, and cancels/ignores stale requests. Then use
it in a small demo component. Tests custom hook design — a common
senior-level ask.

## Functional Requirements

- `useFetch<T>(url: string)` returns `{ data: T | null; loading: boolean; error: string | null }`.
- Fetches on mount and whenever `url` changes.
- Sets `loading` true while a request is in flight, `false` once it settles.
- Sets `error` on failure, clears it on a new successful fetch.

## Edge Cases / Bonus

- Abort the in-flight request (via `AbortController`) if `url` changes again
  or the component unmounts before it resolves.
- Ignore/discard a response that resolves after a newer request has already
  been fired (race condition).
- Support an options object (e.g. `{ skip: boolean }`) to conditionally
  disable fetching.
- Memoize so consumers passing an inline object/url don't cause unnecessary refetches.

## Suggested Time Box

30–40 minutes
