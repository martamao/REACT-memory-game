# Tasks: Memory Game Full Implementation & Refactor

## Phase 1: Architecture and Navigation
- [x] **Permanent Title**: Move "Memory Game" title outside conditional rendering in `App.jsx`.
- [x] **View Management**: Implement `view` state (`'landing'`, `'game'`, `'ranking'`) in `App.jsx`.
- [x] **LandingPage Component**:
    - [x] Create `LandingPage.jsx`.
    - [x] Implement Retro input (3 letters, `_ _ _` placeholder logic).
    - [x] Validation: Disable button until 3 letters are entered.
- [x] **Ranking Component**:
    - [x] Create `Ranking.jsx` with table structure (Player, Moves).
    - [x] Implement mock data sorting (less moves first).
- [x] **Game Flow Update**:
    - [x] Add "Show Ranking" and "Reset Game" buttons at the end of a match.

## Phase 2: Design and Responsivity
- [x] **Centering**: Adjust `App.scss` and main container to ensure the game board is perfectly centered on both X and Y axes on desktop.
- [x] **Mobile Adaptation**: Improve card sizing and margins for smaller screens.
- [x] **Visual Consistency**: Ensure all views (Landing, Game, Ranking) share the same alignment logic.

## Phase 3: Technical Refactoring & Logic Fixes
- [x] **Fix Reset Logic**: Ensure that clicking "Reset" immediately flips all cards back and clears any "preview" of new cards.
- [x] **Style Modularization**: (Done)
- [x] **Custom Hook**: Extract logic from `App.jsx` to `useMemoryGame.js`.
- [x] **Fisher-Yates Shuffling**: Implement for a more random experience.
- [x] **Accessibility**: Add `aria-label` and roles to cards.
- [x] **Constants**: Move `cardArray` to a separate config file.

## Phase 4: Backend Preparation
- [ ] **Express Server**: Basic setup in a new `/backend` folder.
- [ ] **MySQL Integration**: Basic connection logic and schema design.
- [ ] **Endpoints**: Define `POST /ranking` and `GET /ranking`.
