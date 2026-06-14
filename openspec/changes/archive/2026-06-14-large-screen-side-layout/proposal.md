## Why

On large screens, the current viewport-height cap keeps the memory board visually small even when there is enough horizontal space available. The game should use wider screens better by placing the board and end-of-game actions side by side, allowing the board to grow without reintroducing unnecessary vertical scroll.

## What Changes

- Add a large-screen layout that positions the card board on one side and the result message/buttons on the other side when the game is finished.
- Let the board use more available screen space on large viewports while keeping the existing stacked layout on smaller screens.
- Keep the change strictly limited to `.scss` files.
- Preserve current game logic and React component structure.

## Capabilities

### New Capabilities
- `large-screen-side-layout`: Responsive large-screen game layout that uses horizontal space for the board and finished-game actions.

### Modified Capabilities
<!-- None -->

## Impact

- `src/App.scss`: Main game layout, board sizing, and result section placement.
- `src/styles/Button.scss`, `src/styles/Message.scss`, or related SCSS may be adjusted only if needed for the side layout.
- Coordinates with the existing pending `limit-scroll-large-screens` change by replacing the too-small large-screen outcome with a wider responsive layout.
- No React, hook, constants, or game logic files should be modified.
