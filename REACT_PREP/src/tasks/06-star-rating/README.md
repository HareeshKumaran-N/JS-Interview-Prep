# Star Rating

## Problem Statement

Build a star rating widget: N stars, click to set a rating, hover to
preview a rating before committing.

## Functional Requirements

- Render a configurable number of stars (`totalStars` prop, default 5).
- Clicking a star sets the rating and calls an `onChange` callback.
- Hovering over a star previews that rating (fills stars up to the hovered
  one) without changing the committed value until clicked.
- Support a controlled `value` prop and an uncontrolled default.

## Edge Cases / Bonus

- Support half-star increments (stretch).
- Keyboard support: arrow keys to increase/decrease rating, focusable stars.
- Read-only/disabled mode (e.g. for displaying an average rating, no interaction).
- `aria-label` per star (e.g. "Rate 3 out of 5").

## Suggested Time Box

25–35 minutes
