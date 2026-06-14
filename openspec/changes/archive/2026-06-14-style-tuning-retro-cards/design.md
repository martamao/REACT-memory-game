## Context

The current card layout uses thick colored borders and pure white background colors for the face-up side of the cards. The matched state only updates the border color, which doesn't provide strong visual feedback. In addition, the codebase currently contains an incomplete dark mode setup (detecting theme from `localStorage` in `index.html` and overriding variables in `src/App.scss`) that we want to clean up to focus only on a single light retro theme for now. Finally, the emojis inside the cards are small and don't fill the space adequately, so we need to make them larger, centered, and fully responsive.

## Goals / Non-Goals

**Goals:**
- Implement thinner, solid black borders with sharp corners for all cards to create a retro pixelated look.
- Change the default face-up background color of the cards from white to a soft cream/peach color that fits the current retro palette.
- Transition the face-up card background color to the theme's accent color (mint green) when a match is found.
- Completely remove all dark mode styling configurations (variables under `.theme-dark` in `src/App.scss`) and scripts (detection script in `index.html`).
- Scale the emojis inside both `.front` and `.back` sides of the card to occupy almost the entire card area responsively, ensuring they remain centered on all screen sizes.
- Keep all modifications strictly inside `.scss` and `.html` files, with no `.jsx` changes.

**Non-Goals:**
- Any functional or logic modifications to the React components or custom hooks.
- Altering the face-down layout or icon styles.

## Decisions

### 1. Border Styling
- **Option 1 (Selected)**: Change `.card` border to `4px solid #000000` and set `border-radius: 0;` to ensure sharp pixel-art style corners.
- **Option 2**: Maintain custom border-image or SVGs. However, solid black borders align perfectly with standard 8-bit styling.

### 2. Card Background Color
- Change `--card-front` in `src/App.scss` from `#ffffff` (white) to `#ffece0` (a soft peach/cream color that matches the orange and purple retro colors) in the light theme.

### 3. Match Highlight Color
- Currently, when `.itsAMatch` is added by JS, it sets `background-color: var(--color-accent)` on the `.card` container. However, the inner `.back` element has its own solid background color, which hides this change.
- **Implementation**: Target `.itsAMatch .back` to set `background-color: var(--color-accent);` (or simply override `background` on the inner `.back` element under `.itsAMatch`). This ensures the face-up side shows the theme's accent color (mint) when matched.

### 4. Removal of Dark Mode
- **index.html**: Remove the inline `<script>` tag in the `<head>` that retrieves `theme` from `localStorage` and appends `theme-dark` to the class list of the `<html>` tag.
- **src/App.scss**: Completely delete the `.theme-dark` style block. Delete references to dark theme toggle from comments.

### 5. Emoji Size scaling
- **Approach**: Set `container-type: inline-size;` on the `.card` selector in `src/styles/Card.scss`. This registers each card as a container query context.
- Inside `.front` and `.back`, change `font-size` from `clamp(...)` to a percentage of container width, e.g. `font-size: 65cqw;` (65% of the card's width). This provides perfect, fluid, and responsive scaling regardless of device or screen resolution while keeping the emoji centered.

## Risks / Trade-offs

- **Risk**: Contrast between card contents (e.g., icons or text) and the new background color.
- **Mitigation**: The new background color is a light pastel cream `#ffece0`, ensuring the text and icons remain highly readable.
