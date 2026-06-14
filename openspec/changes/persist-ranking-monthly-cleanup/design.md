## Context

The codebase currently has `MOCK_RANKING` in `Ranking.jsx`. No `localStorage` usage exists for ranking results, despite the README describing a local Top 5. The future backend is out of scope for this change.

## Goals / Non-Goals

**Goals:**
- Persist completed game results in LocalStorage.
- Display saved results in Ranking instead of mock data.
- Clear ranking data periodically every month.
- Avoid saving incomplete games.

**Non-Goals:**
- Backend endpoints, database schema, or network calls.
- User accounts or authentication.
- Saving in-progress game state.

## Decisions

### 1. Centralize LocalStorage helpers

Create a small utility module for ranking storage keys, parsing, validation, sorting, saving, and monthly cleanup. This keeps `Ranking.jsx` focused on rendering and makes cleanup easier to test manually.

Alternative considered: put all LocalStorage code inside `Ranking.jsx`. That is faster but would mix persistence logic with presentation.

### 2. Store metadata for cleanup

Store a cleanup timestamp or month key alongside ranking entries. On app load or before ranking read/write, compare the stored period with the current month and clear stale entries.

Alternative considered: use per-entry expiration dates. Monthly full cleanup is simpler and matches the request.

### 3. Save only completion results

Saving should be triggered only when the game reaches a completed result, not when resetting, returning to LandingPage, or timing out.

Alternative considered: save every game start and update it later. That risks retaining unfinished games.

## Risks / Trade-offs

- LocalStorage can contain malformed old data. Mitigation: validate parsed data and reset to an empty ranking if invalid.
- The browser controls LocalStorage availability. Mitigation: wrap storage access in safe helpers and fail gracefully with an empty ranking.
- This change may need coordination with the timer change once `time` becomes part of ranking entries. Mitigation: design entries to accept time fields when available.
