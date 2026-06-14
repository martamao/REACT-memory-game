## 1. LocalStorage Utilities

- [ ] 1.1 Add ranking storage helpers for reading, validating, sorting, saving, and clearing ranking entries.
- [ ] 1.2 Add monthly cleanup metadata and cleanup behavior.

## 2. Ranking Integration

- [ ] 2.1 Replace `MOCK_RANKING` in `Ranking.jsx` with LocalStorage-backed data.
- [ ] 2.2 Save completed game results from the game flow only when the player finishes all pairs.
- [ ] 2.3 Ensure resets, returns to LandingPage, and unfinished games do not write ranking entries.

## 3. Verification

- [ ] 3.1 Verify saved completed results appear in Ranking.
- [ ] 3.2 Verify invalid or missing LocalStorage data falls back safely.
- [ ] 3.3 Verify monthly cleanup clears old ranking data and preserves current-month data.
