## Why

The game currently lacks a time-based challenge. We need to introduce an elapsed-time tracker that starts upon user action, includes a 15-minute maximum, and uses this time for ranking tie-breaking while excluding timed-out results from the ranking.

## What Changes

- Implement a game timer that starts only when the user clicks "Start Game" on the Landing Page.
- Add a 15-minute timeout mechanism that ends the game.
- Prevent timed-out games from being saved in the ranking.
- Update the ranking table to display elapsed time.
- Implement sorting in the ranking: fewer moves first, then lower time as a tie-breaker.

## Capabilities

### New Capabilities
- `game-timer`: Active game timer with manual start trigger and 15-minute timeout.
- `ranking-integration`: Inclusion of time in ranking entries and sorting logic with tie-breaker.

### Modified Capabilities

## Impact

- `src/hooks/useMemoryGame.js`: Timer start, stop, reset, and timeout logic.
- `src/components/Counter.jsx`: Display time.
- `src/components/Ranking.jsx`: Display time column and tie-breaker sorting.
- `src/App.jsx`: Link landing page start action to timer start.
