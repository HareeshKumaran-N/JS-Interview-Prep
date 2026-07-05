# Debounced Search

## Problem Statement

Build a search input that queries a (mock) product API as the user types, but
only fires the request after the user has paused typing — to avoid hammering
the backend on every keystroke. One of the most commonly asked React
machine-coding questions (Flipkart, Swiggy, Meesho-style rounds).

## Functional Requirements

- Controlled text input bound to component state.
- Debounce the API call by ~300-500ms after the last keystroke.
- Show a loading indicator while a request is in flight.
- Render the list of results below the input.
- Show an empty/"no results" state when nothing matches.

## Edge Cases / Bonus

- Cancel/ignore stale responses if a newer request has since been fired (race condition handling).
- Handle rapid clearing of the input (empty query should reset results, not fire a request).
- Abort in-flight requests on unmount (`AbortController`).
- Extract the debounce logic into a reusable `useDebounce` hook.
- Handle API error state distinctly from empty results.

## Suggested Time Box

40–50 minutes
