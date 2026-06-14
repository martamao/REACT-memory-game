## Context

The timer in `useMemoryGame` is currently started by an `useEffect` that triggers when the game is initialized (as part of `initialState` or card setup). This makes the timer start immediately when the app loads or the game resets, not when the user starts interacting with the board after entering the landing page.

## Goals / Non-Goals

**Goals:**
- Delay the start of the timer until the player clicks "Start Game" on the Landing Page.
- Maintain the timer functionality once it has started.

**Non-Goals:**
- Changes to timer display format or 15-minute timeout logic.

## Decisions

### 1. Control timer start in `useMemoryGame`
Instead of an automatic start, add a `startTimer` function to the `useMemoryGame` hook, which the `App` component will call upon starting the game.

### 2. State update in `useMemoryGame`
Introduce a `gameStarted` flag in the game state to explicitly track if the game has been started by the user. The timer effect will only run if `gameStarted` is true.

## Risks / Trade-offs

- Complexity in managing state: Adding a `gameStarted` flag increases state complexity. Mitigation: ensure it is managed cleanly within the `useMemoryGame` reducer.
