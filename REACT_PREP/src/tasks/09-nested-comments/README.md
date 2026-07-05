# Nested Comments

## Problem Statement

Build a recursive nested comment thread: each comment can have replies,
which themselves can have replies, rendered as an indented tree. Support
adding a new top-level comment and replying to any existing comment.

## Functional Requirements

- Render a tree of comments, each showing author, text, and its nested
  replies indented underneath.
- Add a new top-level comment via a form.
- Reply to any comment at any depth, inserting the new reply into that
  comment's children.
- Delete a comment (and its subtree).

## Edge Cases / Bonus

- Collapse/expand a comment's replies.
- Prevent adding empty/whitespace-only comments.
- Track and display reply counts per thread.
- Edit an existing comment's text in place.

## Suggested Time Box

45–55 minutes
