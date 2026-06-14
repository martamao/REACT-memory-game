## Why

The LandingPage retro player input currently shows duplicate underscore markers: the black underline and an orange underscore character. The input should keep the black underline slots while hiding the orange placeholder characters until the player types letters.

## What Changes

- Remove the visible orange underscore placeholder characters from the player-name input.
- Keep the black underline styling as the only empty-slot marker.
- Preserve the existing three-letter input behavior.
- File category: **JSX + SCSS**.

## Capabilities

### New Capabilities
- `landing-input-underscore-visibility`: Visual behavior for empty player-name slots on the landing screen.

### Modified Capabilities
<!-- None -->

## Impact

- `src/components/LandingPage.jsx`: Stop rendering `_` as visible placeholder text.
- `src/styles/LandingPage.scss`: Keep black underline slots and typed-letter spacing stable.
- No hooks, storage, game logic, or backend changes.
