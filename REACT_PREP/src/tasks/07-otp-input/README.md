# OTP Input

## Problem Statement

Build an OTP/PIN entry component: N separate single-digit boxes where
typing a digit auto-advances focus to the next box, and backspace on an
empty box moves focus back.

## Functional Requirements

- Render `length` (e.g. 6) single-character input boxes.
- Typing a digit in a box moves focus to the next box automatically.
- Backspace on an empty box moves focus to the previous box and clears it.
- Expose the full assembled code via an `onComplete` callback.

## Edge Cases / Bonus

- Support pasting a full code across all boxes at once.
- Only allow numeric input (reject letters/symbols).
- Arrow-key navigation between boxes.
- Call `onComplete` only once all boxes are filled.

## Suggested Time Box

30–40 minutes
