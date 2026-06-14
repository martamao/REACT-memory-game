## 1. Timer Hook Update

- [ ] 1.1 Add `gameStarted` state to `useMemoryGame` reducer.
- [ ] 1.2 Add `startGame` action to trigger `gameStarted` state.
- [ ] 1.3 Modify timer `useEffect` to only run if `gameStarted` is true.

## 2. App Integration

- [ ] 2.1 Expose `startGame` from `useMemoryGame`.
- [ ] 2.2 Call `startGame` in `App.jsx` when handling game start from landing page.

## 3. Verification

- [ ] 3.1 Verify timer does not run on app load.
- [ ] 3.2 Verify timer starts incrementing when player clicks "Start Game".
