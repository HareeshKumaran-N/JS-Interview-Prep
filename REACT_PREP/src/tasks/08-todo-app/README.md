# Todo App (Filters + Persistence)

## Problem Statement

Build a classic todo app: add, toggle complete, delete todos; filter by
All/Active/Completed; persist todos in `localStorage` across reloads. A
common warm-up machine coding question used to gauge baseline
state-management fluency.

## Functional Requirements

- Add a new todo via a text input + submit (Enter key or button).
- Toggle a todo's completed state by clicking/checking it.
- Delete a todo.
- Filter the visible list by All / Active / Completed.
- Persist todos to `localStorage` and rehydrate on mount.

## Edge Cases / Bonus

- Prevent adding empty/whitespace-only todos.
- Show a count of remaining active todos ("3 items left").
- "Clear completed" action.
- Inline-edit an existing todo's text (double-click to edit, like classic TodoMVC).

## Suggested Time Box

35–45 minutes
