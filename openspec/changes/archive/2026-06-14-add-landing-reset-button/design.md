## Context

The app currently has three views: Landing, Game, and Ranking. `handleReset` resets the memory game state but keeps the user in the game view. There is no explicit way to return to LandingPage after starting a game.

## Goals / Non-Goals

**Goals:**
- Add a visible control in the game flow that returns to LandingPage.
- Reset cards, moves, points, matched cards, and result state when returning.
- Avoid saving an unfinished game.
- Allow the player to enter a different username.

**Non-Goals:**
- Persisting unfinished games.
- Changing the LandingPage input rules.
- Adding backend behavior.

## Decisions

### 1. Use App-level navigation and hook reset together

Add an App-level handler such as `handleBackToLanding` that calls the existing reset behavior, clears `playerName`, and sets `view` to `GAME_VIEWS.LANDING`.

Alternative considered: place navigation inside `useMemoryGame`. That would mix view routing into the game hook, making the hook less focused.

### 2. Treat return-to-landing as a discard action

The new button should discard the active game. Ranking persistence must only happen on a completed game, so this action must not trigger any save.

Alternative considered: ask for confirmation before discarding. That adds UX complexity not requested here.

## Risks / Trade-offs

- If `handleReset` uses delayed reset animation, navigating immediately could briefly keep stale state in memory. Mitigation: ensure the reset path produces a clean game when the next player starts.
- Adding another game button may require minor layout adjustment. Mitigation: use existing `.resultButtons`/button styles first and only add SCSS if necessary.
