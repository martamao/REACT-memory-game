## 1. Timer State and Game Flow

- [x] 1.1 Add elapsed-time state to `useMemoryGame`.
- [x] 1.2 Start the timer when a game is active and stop it on completion, timeout, or reset.
- [x] 1.3 Reset elapsed time when starting a new game or resetting the current game.
- [x] 1.4 Add a timeout state when elapsed time reaches 15 minutes.

## 2. UI Integration

- [x] 2.1 Update `Counter.jsx` to render time alongside moves and points.
- [ ] 2.2 Update `Counter.scss` so three stats remain readable on mobile and desktop.
- [ ] 2.3 Update messages/buttons if needed to communicate timeout without saving.

## 3. Ranking Integration

- [ ] 3.1 Include elapsed time in completed ranking result data.
- [ ] 3.2 Update `Ranking.jsx` to display a time column.
- [ ] 3.3 Sort ranking by moves first and elapsed time second.
- [ ] 3.4 Ensure timed-out games are excluded from ranking saves.

## 4. Verification

- [ ] 4.1 Verify timer starts at `00:00` and increments every second.
- [ ] 4.2 Verify reset/new player returns timer to `00:00`.
- [ ] 4.3 Verify completed games save their time.
- [ ] 4.4 Verify timeout at `15:00` ends the game without saving.
