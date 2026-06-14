## Why

The game timer currently starts as soon as the game is initialized. It should start when the player clicks the start button on the landing page, as it is the true beginning of their gameplay.

## What Changes

- Modify `useMemoryGame` to not auto-start the timer upon initialization.
- Modify `App.jsx` to trigger timer start when the player clicks the "Start Game" button on the landing page.

## Capabilities

### New Capabilities
<!-- Capabilities being introduced. Replace <name> with kebab-case identifier (e.g., user-auth, data-export, api-rate-limiting). Each creates specs/<name>/spec.md -->
- `delayed-timer-start`: Trigger the timer only when the game actively starts.

### Modified Capabilities
<!-- Existing capabilities whose REQUIREMENTS are changing (not just implementation).
     Only list here if spec-level behavior changes. Each needs a delta spec file.
     Use existing spec names from openspec/specs/. Leave empty if no requirement changes. -->

## Impact

- `src/hooks/useMemoryGame.js`: Logic to control timer start.
- `src/App.jsx`: State management to trigger timer start.
