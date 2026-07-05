# Infinite Scroll List

## Problem Statement

Build a product/list feed that loads more items automatically as the user
scrolls near the bottom of the page (or a scrollable container), fetching
from a paginated (mock) API. Tests `IntersectionObserver` usage, pagination
state, and loading/error handling under scroll.

## Functional Requirements

- Fetch and render the first page of items on mount.
- Detect when the user scrolls near the bottom and fetch the next page.
- Show a loading indicator while fetching.
- Stop fetching once the API reports no more pages ("end of list").

## Edge Cases / Bonus

- Prevent duplicate fetches while a request for the next page is already in flight.
- Handle fast/repeated scrolling without firing multiple overlapping requests.
- Provide a graceful error state with a "retry" action.
- Use `IntersectionObserver` on a sentinel element instead of scroll event listeners.
- Support a fallback "Load More" button as a non-observer alternative.

## Suggested Time Box

45–60 minutes
