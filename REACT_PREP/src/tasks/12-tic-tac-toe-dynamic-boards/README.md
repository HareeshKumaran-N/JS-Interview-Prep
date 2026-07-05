# Tic-Tac-Toe, Dynamic Boards

## Problem Statement

Build a Tic-Tac-Toe game where the number of boards rendered is controlled
by a prop (`boardCount`), each board played independently by the same two
players (whether turns alternate globally or per-board is intentionally
left ambiguous — clarify with your interviewer, as real rounds do). This
exact variation has been asked in Atlassian-style rounds.

## Functional Requirements

- Render `boardCount` independent 3x3 boards from a single
  `<TicTacToe boardCount={n} />` component.
- Clicking a cell places the current player's mark (X or O) if the cell is empty.
- Detect and display a win/draw state per board.
- Alternate turns between two players.

## Edge Cases / Bonus

- Prevent clicking a cell after that board is already won/drawn.
- Highlight the winning line of 3 cells.
- Add a "reset" action per board and/or for all boards at once.
- Track and display a running score across boards (games won per player).

## Suggested Time Box

45–60 minutes
