## ADDED Requirements

### Requirement: Thinner pixelated black borders
All game cards MUST have a black border (`#000000`) with a thickness of 4px and a `border-radius` of 0 to achieve a sharp, pixelated, retro aesthetic.

#### Scenario: Verify border thickness and style
- **WHEN** a game card is displayed
- **THEN** it renders with a 4px black solid border and perfectly sharp, square corners.

### Requirement: Retro palette-compliant face-up background
The background of the face-up side of the card (`.back`) MUST use a custom color that aligns with the project's retro palette (a light cream/peach color, e.g. `#ffece0`) instead of pure white (`#ffffff`).

#### Scenario: Verify face-up background color
- **WHEN** a card is flipped face-up
- **THEN** the background of the face-up side is `#ffece0` rather than `#ffffff`.

### Requirement: Selection background stability
The face-up background color of a flipped card MUST NOT change on selection alone. It MUST only change if the card matches.

#### Scenario: Verify background stays same on selection
- **WHEN** a card is clicked/selected and flipped face-up
- **THEN** its background remains `#ffece0`.

### Requirement: Match background transition
When a card becomes part of a matched pair, its face-up background color MUST change to the theme's accent color (mint green) to clearly highlight the successful match.

#### Scenario: Verify background color change on match
- **WHEN** two matching cards are flipped and paired
- **THEN** their face-up background color changes to the theme's accent color (`var(--color-accent)`).

### Requirement: Responsive large centered card emojis
The emojis/icons inside both `.front` and `.back` sides of the card MUST scale responsively to occupy almost all available space (e.g. using `cqw` container query units) and MUST be centered within the card.

#### Scenario: Verify emoji sizing and centering
- **WHEN** the game cards are rendered at different viewport sizes
- **THEN** the emojis inside both face-down and face-up sides remain centered and scale dynamically to fill approximately 60-70% of the card's width.
