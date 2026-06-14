## Why

On medium and large screens, the game board has a fixed width of up to 640px, causing the entire layout (including the title, board, counter, and result buttons) to exceed the viewport height. This forces the user to scroll vertically to see all elements, disrupting the retro console feel. We want to adapt the game board dynamically using viewport-height units so that the entire application fits in a single screen without scrolling on all standard screen sizes.

## What Changes

- Limit the maximum width/size of the game board grid using viewport height (`vh` or `dvh`) units.
- Ensure the board scales down dynamically on shorter viewports so that the header, counter, board, and buttons are always visible on the screen at the same time.
- Restrict all modifications exclusively to `.scss` styling files, avoiding any changes to React components.

## Capabilities

### New Capabilities
- `board-viewport-scaling`: Dynamic scaling of the board based on viewport height to prevent scrolling.

### Modified Capabilities
<!-- None -->

## Impact

- `src/App.scss`: Adjust `.table` (board grid) width, max-width, and padding/margins.
