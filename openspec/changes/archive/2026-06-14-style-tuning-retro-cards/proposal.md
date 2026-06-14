## Why

The memory game cards currently have thick colored borders and a plain white background when face up. To enhance the "retro" 8-bit/16-bit console aesthetic, we want to implement thinner black borders with a sharp pixelated feel, use a palette-compliant background color for the face-up cards, and ensure that matched cards change their background color rather than just their borders.
Furthermore, the dark mode is incomplete and not required for this phase of development. We want to remove all dark mode-related styling, variables, classes, and loader scripts, leaving only the light retro theme.
Additionally, the emojis or icons on the back of the cards are currently very small. To improve visibility and design, we want to scale them up so that they fill almost the entire card area responsively, while keeping them perfectly centered.

## What Changes

- Change card border styles to be thinner, black, and sharp (using a pixelated look with square corners).
- Replace the plain white face-up card background with a color matching the retro palette (a light peach/cream color).
- Adjust the card background behavior:
  - Flipped/Selected card: Keep the default face-up background color (no change on selection).
  - Matched cards: Change the face-up background color to the theme's accent color (mint green) when a match is made.
- Completely remove dark mode support:
  - Remove the inline JavaScript script in `index.html` that reads the theme from `localStorage` and appends `theme-dark` class.
  - Remove `.theme-dark` class and its custom color variables from `src/App.scss`.
- Increase the font-size of the card emojis (both face-down and face-up sides) to scale responsively using container query units (`cqw`), so that they occupy almost the entire card container and are centered.
- Restrict modifications to `.scss` and `.html` files, ensuring no `.jsx` component files are altered.

## Capabilities

### New Capabilities
- `card-styling-tuning`: Custom retro style tuning for the memory game cards.
- `remove-dark-mode`: Removal of all dark mode styles and scripts.
- `enlarge-card-emojis`: Scaling up of card icons/emojis to be responsive and large.

### Modified Capabilities
<!-- None -->

## Impact

- `src/styles/Card.scss`: Card borders, background colors, emoji sizing (using container query units), and flip/match state stylings will be modified.
- `src/App.scss`: Retro theme color variables will be updated, and the `.theme-dark` styling rules will be removed.
- `index.html`: The inline dark-theme detection script will be removed.
