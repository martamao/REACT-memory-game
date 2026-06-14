## 1. Timer Hook Implementation

- [x] 1.1 Update `useMemoryGame` to include `gameStarted` state and `startGame` action.
- [x] 1.2 Modify `useEffect` for timer to run only if `gameStarted` is true.
- [x] 1.3 Add timeout logic (15 mins) in `useMemoryGame` to dispatch `SET_TIMEOUT` and stop timer.

## 2. App Integration

- [x] 2.1 Pass `startGame` action to Landing Page or trigger it in `App.jsx` upon game start.
- [x] 2.2 Handle `timeout` state in `App.jsx` to stop game and prevent ranking save.

## 3. Ranking Integration

- [x] 3.1 Update `Ranking` component to receive and display time.
- [x] 3.2 Implement sorting logic in `Ranking` (moves asc, time asc).
- [x] 3.3 Ensure timed-out results are not saved (check `App.jsx` save logic).

## 4. Verification

- [x] 4.1 Verify timer starts only after game starts.
- [x] 4.2 Verify 15-minute timeout ends game and prevents saving.
- [x] 4.3 Verify ranking display and sorting with time.
