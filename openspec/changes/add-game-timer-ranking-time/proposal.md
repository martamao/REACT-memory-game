## Why

The game currently tracks moves and points, but players also need to see how long the match takes. Time should become part of the game stats and ranking tie-breaker, with a 15-minute maximum that ends the game without saving a ranking result.

## What Changes

- Add a `00:00` game timer displayed alongside moves and points.
- Track elapsed time during active games and reset it with game resets/new players.
- End the game when elapsed time reaches 15 minutes.
- Do not save timed-out games to LocalStorage.
- Add time to ranking entries and the ranking table.
- Sort ranking by fewer moves first, then lower time as the tie-breaker.
- File category: **JSX/lógica + SCSS**.

## Capabilities

### New Capabilities
- `game-timer`: Active game timer with a 15-minute maximum.
- `ranking-time-tiebreaker`: Ranking display and sorting behavior that includes elapsed time.

### Modified Capabilities
<!-- None -->

## Impact

- `src/hooks/useMemoryGame.js`: Timer state, elapsed time, timeout handling, reset behavior.
- `src/components/Counter.jsx`: Display time with moves and points.
- `src/components/Ranking.jsx`: Display time column and use time as tie-breaker.
- `src/App.jsx`: Pass time and completion/timeout status between game, message, and ranking persistence.
- SCSS files such as `src/styles/Counter.scss` and `src/styles/Ranking.scss` may need layout updates.
- No backend, server, or database changes.
