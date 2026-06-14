## Context

The game view currently renders `Counter`, `.table`, and `.resultSection` as sibling elements inside `main`. The prior scroll-prevention styling uses a viewport-height cap on `.table`, which helps avoid vertical overflow but makes the board feel too small on large screens.

The requested change must keep all React structure and game logic untouched. Because `.resultSection` only exists after the player finishes the game, the layout must work both before and after that block is rendered.

## Goals / Non-Goals

**Goals:**
- Use available horizontal space on large screens so the board can be larger.
- Place the finished-game result controls beside the board on large screens.
- Preserve the mobile and small-screen stacked layout.
- Restrict implementation to SCSS files.

**Non-Goals:**
- Changing React components, hooks, game state, reset behavior, ranking behavior, or button rendering conditions.
- Adding wrappers or new semantic markup.
- Changing card values, game rules, or scoring.

## Decisions

### 1. Use CSS Grid on the game view container

Use `main` as the layout grid at large breakpoints, assigning `h1`, `.counterSection`, `.table`, and `.resultSection` to named grid areas. This works with the existing DOM and allows `.table` and `.resultSection` to sit side by side only when `.resultSection` exists.

Alternative considered: add a React wrapper around the game content. This would make layout targeting simpler, but it violates the style-only constraint.

### 2. Size the board with width-aware and height-aware constraints

Replace the tight large-screen board cap with a responsive size such as `width: min(70vmin, 760px, 100%)` at base sizes and a larger `clamp()`/`min()` rule at large breakpoints. Keep `aspect-ratio: 1 / 1` so the board remains square.

Alternative considered: remove viewport-height constraints completely. That could make the board too tall on shorter laptops and bring back vertical scroll.

### 3. Keep end-game actions compact in the side column

On large screens, `.resultSection` should align beside the board and stack its message/buttons vertically. Before the game ends, the missing `.resultSection` means the board remains centered by grid placement.

Alternative considered: reserve an empty side column for buttons before the game ends. That would waste space and make the in-progress board feel off-center.

## Risks / Trade-offs

- Large-screen CSS targets `main` globally, which also contains landing and ranking views. Mitigation: make rules depend on existing child class placement and keep landing/ranking styles compatible with centered layout.
- CSS-only layout cannot add a dedicated game wrapper. Mitigation: use grid areas on existing siblings and avoid selectors that require new markup.
- Very short landscape screens may still need vertical scrolling. Mitigation: keep a height-aware max size and retain stacked behavior for small widths.
