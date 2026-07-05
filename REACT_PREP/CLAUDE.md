# REACT_PREP

## Purpose

This app exists to drill React machine-coding interview rounds. The owner
is a MERN stack developer with 3+ years of experience, currently job
hunting, prepping for product-company frontend rounds (Flipkart, Atlassian,
Uber, Razorpay, MMT, Cars24, Paytm-style companies).

## Stack facts

- React 19 + TypeScript + Vite. No routing library, no CSS framework, no
  test runner, no path aliases — all imports are plain relative imports.
- `tsconfig.app.json` has `noUnusedLocals`/`noUnusedParameters` on and
  `verbatimModuleSyntax: true` — type-only imports must use
  `import type` / inline `type` specifiers, and boilerplate/stub code must
  avoid genuinely-unused locals or parameters (exporting a stub helper, or
  giving it a real trivial implementation, avoids the unused-locals error;
  don't destructure a prop you're not using yet).
- ESLint is flat-config (`eslint.config.js`): `@eslint/js` recommended +
  `typescript-eslint` recommended + `eslint-plugin-react-hooks` recommended
  + `eslint-plugin-react-refresh` (vite config). No Prettier.

## `src/tasks/` convention

Each machine-coding question lives in its own numbered folder:

```
src/tasks/<NN>-<kebab-name>/
  README.md    - problem statement, functional requirements, edge cases/bonus, suggested time box
  index.tsx    - boilerplate functional component (typed, imports styles.css, JSX shell with TODOs) — not a solution
  styles.css   - boilerplate CSS classes matching the component's DOM structure (layout/reset only, no solved visuals)
```

`src/tasks/README.md` is the master index — a checklist of all tasks plus a
"Backlog / next batch" section for ideas not yet scaffolded.

**Practice workflow (no router, by design):** open a task's README, set a
timer, implement inside that task's `index.tsx`/`styles.css`, then
temporarily import the component into `src/App.tsx` (same pattern already
used for `src/practice/polyfills/use-custom-effect.ts`, wired in behind a
`//task` comment marker) and run `npm run dev` to view it live. Remove the
import when moving to the next task.

## Batch 1 — scaffolded (12 tasks)

01 Debounced Search · 02 Infinite Scroll List · 03 Accordion · 04 Tabs
(compound component) · 05 Modal Dialog (portal + a11y) · 06 Star Rating ·
07 OTP Input · 08 Todo App (filters + persistence) · 09 Nested Comments ·
10 Feature Flag Toggle · 11 Custom useFetch Hook · 12 Tic-Tac-Toe (dynamic
boards)

## Backlog — not yet scaffolded

Data table with sort/filter/pagination, multi-step form wizard, drag-and-drop
Kanban board, toast notification system, custom multi-select dropdown, file
explorer tree, shopping cart/checkout state management. Follow the same
`<NN>-<kebab-name>/README.md + index.tsx + styles.css` convention when adding
these in a future session.
