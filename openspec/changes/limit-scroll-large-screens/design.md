## Context

Currently, the game board `.table` has a width of `min(640px, 100%)`. On standard laptop screens (which have height constraints, typically 800px-900px of viewable height), a 640px tall/wide board plus header, counter, margins, and result buttons exceeds the viewport height. This results in a vertical scrollbar, which degrades the retro console experience.

## Goals / Non-Goals

**Goals:**
- Scale the `.table` component based on viewport height (`vh` or `dvh`) so that the game fits vertically on the screen without scrolling.
- Retain responsiveness on all screen sizes, including mobile and desktop.
- Keep modifications strictly to `.scss` files.

**Non-Goals:**
- Changing any React layout components or Javascript game state logic.

## Decisions

### 1. Board Dimension Constraints
- **Approach**: Set `max-width: 55vh;` and `aspect-ratio: 1 / 1;` on `.table` in `src/App.scss`.
- **Why**: Since cards have `aspect-ratio: 1 / 1` and scale to fill their grid cells, limiting the table's width to a viewport-height percentage (55% of viewport height) also automatically limits the table's height and card sizes!
- On screens where the height is small, the board scales down dynamically. On screens where height is large, the board still caps at `640px` (or `100%` width on small mobile screens).

### 2. Margins and Spacing
- Adjust the margins around the table and title slightly to ensure there is plenty of room for buttons and results. Specifically, change `.table` margins to `margin-top: 15px; margin-bottom: 10px;` to reduce vertical padding.

## Risks / Trade-offs

- **Risk**: On extremely small viewports (such as mobile phones in landscape mode), the board might scale down too much.
- **Mitigation**: Standard media queries already handle small screen widths, and the grid columns maintain a `min-width` on cards. In extreme cases (e.g. height < 300px), a scrollbar is acceptable, but for all standard desktop/laptop/tablet viewports, it will fit cleanly.
