# Tasks: Memory Game Full Implementation & Refactor

## Phase 1: Architecture and Navigation
- [ ] **Permanent Title**: Move "Memory Game" title outside conditional rendering in `App.jsx`.
- [ ] **View Management**: Implement `view` state (`'landing'`, `'game'`, `'ranking'`) in `App.jsx`.
- [ ] **LandingPage Component**:
    - [ ] Create `LandingPage.jsx`.
    - [ ] Implement Retro input (3 letters, `_ _ _` placeholder logic).
    - [ ] Validation: Disable button until 3 letters are entered.
- [ ] **Ranking Component**:
    - [ ] Create `Ranking.jsx` with table structure (Player, Moves).
    - [ ] Implement mock data sorting (less moves first).
- [ ] **Game Flow Update**:
    - [ ] Add "Show Ranking" and "Reset Game" buttons at the end of a match.

## Phase 2: Design and Responsivity
- [ ] **Centering**: Adjust `App.scss` and main container to ensure the game board is perfectly centered on both X and Y axes on desktop.
- [ ] **Mobile Adaptation**: Improve card sizing and margins for smaller screens.
- [ ] **Visual Consistency**: Ensure all views (Landing, Game, Ranking) share the same alignment logic.

## Phase 3: Technical Refactoring & Logic Fixes
- [ ] **Fix Reset Logic**: Ensure that clicking "Reset" immediately flips all cards back and clears any "preview" of new cards.
- [ ] **Style Modularization**: (Done)
- [ ] **Custom Hook**: Extract logic from `App.jsx` to `useMemoryGame.js`.
- [ ] **Fisher-Yates Shuffling**: Implement for a more random experience.
- [ ] **Fisher-Yates Shuffling**: Implement more uniform shuffling algorithm.
- [ ] **Accessibility**: Add `aria-label` and roles to cards.
- [ ] **Constants**: Move `cardArray` to a separate config file.

## Phase 4: Backend Preparation
- [ ] **Express Server**: Basic setup in a new `/backend` folder.
- [ ] **MySQL Integration**: Basic connection logic and schema design.
- [ ] **Endpoints**: Define `POST /ranking` and `GET /ranking`.
