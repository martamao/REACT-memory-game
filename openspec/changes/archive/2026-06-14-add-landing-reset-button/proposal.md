## Why

Players need a clear way to return to LandingPage to change the username. This action should behave like a reset and must not save an unfinished game.

## What Changes

- Add a new button that returns the player to LandingPage.
- Reset the current game state when returning to LandingPage.
- Clear or replace the current player name so the player can enter a new one.
- Ensure unfinished games are not saved as ranking results.
- File category: **JSX/lógica**.

## Capabilities

### New Capabilities
- `landing-return-reset`: A player action that resets the game and returns to LandingPage for username changes.

### Modified Capabilities
<!-- None -->

## Impact

- `src/App.jsx`: Add handler and render the new return-to-landing button in the game flow.
- `src/hooks/useMemoryGame.js`: Reuse or expose reset behavior if needed.
- Existing button component may be reused without new SCSS unless layout polish becomes necessary.
- No backend changes.
