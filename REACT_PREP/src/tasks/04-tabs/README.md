# Tabs (Compound Component Pattern)

## Problem Statement

Build a `Tabs` component using the compound component pattern —
`Tabs`, `Tabs.List`, `Tabs.Tab`, `Tabs.Panel` — so consumers compose it
declaratively instead of passing a big config object. Tests context usage
and component API design, a common ask at senior-level rounds.

## Functional Requirements

- `<Tabs defaultIndex={0}>` provides shared active-tab state via context.
- `<Tabs.List>` renders tab buttons; `<Tabs.Tab>` marks the active tab visually.
- `<Tabs.Panel>` renders only the content for the active tab.
- Clicking a tab switches the active panel.

## Edge Cases / Bonus

- Keyboard navigation between tabs (arrow keys) per the WAI-ARIA tabs pattern.
- Support controlled usage (`activeIndex`/`onChange` props) in addition to uncontrolled.
- Guard against `Tabs.Tab`/`Tabs.Panel` being used outside a `<Tabs>` provider (throw a clear error).
- Lazy-render inactive panels only once they've been visited (perf bonus).

## Suggested Time Box

40–50 minutes
