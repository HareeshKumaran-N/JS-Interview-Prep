# Accordion

## Problem Statement

Build an accordion component that renders a list of sections, each with a
header and collapsible content. Clicking a header toggles its section
open/closed.

## Functional Requirements

- Accept a list of `{ title, content }` items as props.
- Clicking a section header expands/collapses its content.
- Support a `mode` of `"single"` (only one section open at a time) vs
  `"multiple"` (independent toggles).
- Visually indicate open/closed state (e.g. chevron rotation, active class).

## Edge Cases / Bonus

- Animate the expand/collapse height transition smoothly.
- Keyboard accessibility: header is a `button`, togglable via Enter/Space,
  correct `aria-expanded`/`aria-controls`.
- Allow one section to be open by default via props.
- Support nested accordions (stretch).

## Suggested Time Box

30–40 minutes
