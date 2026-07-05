# Modal Dialog (Portal + Accessibility)

## Problem Statement

Build a reusable `Modal` component rendered via `createPortal` into
`document.body`, with proper focus management and keyboard/overlay
dismissal. A very common "build a reusable UI primitive" round.

## Functional Requirements

- Render modal content into a portal (not inline in the DOM tree) when `isOpen` is true.
- Clicking the overlay (backdrop) closes the modal.
- Pressing `Escape` closes the modal.
- Body scroll is locked while the modal is open.

## Edge Cases / Bonus

- Trap focus inside the modal while open, and restore focus to the
  previously focused element on close.
- `role="dialog"`, `aria-modal="true"`, and an accessible label (`aria-labelledby`).
- Support multiple stacked modals (stretch).
- Clicking inside the modal content must NOT close it (stop propagation correctly).

## Suggested Time Box

40–50 minutes
