## Context

The game lacks a time constraint and ranking by time. The current timer starts upon initialization rather than at the start of active play.

## Goals / Non-Goals

**Goals:**
- Implement a 15-minute game limit.
- Start the timer only when the game actively begins (via Landing Page).
- Exclude timed-out games from ranking.
- Include elapsed time in ranking display and use it for tie-breaker sorting.

**Non-Goals:**
- Backend implementation.

## Decisions

### 1. Timer Control in `useMemoryGame`
Add `startGame` action to the reducer to transition from a ready-to-play state to an actively playing state, which triggers the timer.

### 2. Timeout Handling
In the timer `useEffect`, when `elapsedTime` reaches 900 seconds (15 minutes), dispatch a `SET_TIMEOUT` action. The `App` component will listen for this to stop the game and prevent saving to storage.

### 3. Ranking Sorting
Use `Array.prototype.sort` with a comparator: `(a, b) => a.moves - b.moves || a.time - b.time`. This prioritizes moves, then time.

## Risks / Trade-offs

- Timer state management complexity: Adding `gameStarted` state. Mitigation: Keep state transitions in the reducer predictable.
