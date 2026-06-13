# Proposal: Memory Game Full Implementation & Refactor

## Goal
Implement the core features for the Memory Game (Landing Page, Ranking, Backend preparation) and apply technical improvements to ensure a scalable and maintainable codebase, following the "Retro" aesthetic.

## Scope
- **Frontend Architecture**: Permanent title, view management (Landing, Game, Ranking).
- **New Components**: `LandingPage` (Retro input) and `Ranking` (Mock data initially).
- **Game Flow**: Post-game options (Show Ranking, Reset).
- **Design**: Responsive centering and mobile adaptation.
- **Backend (Preparation)**: Basic Express server setup, MySQL connection, and initial endpoints.
- **Refactoring**: 
    - Style modularization: Each component will have its own `.scss` file. `App.scss` will be reserved for global styles (fonts, body, shared variables) and styles used in more than one element.
    - Custom hook for game logic (`useMemoryGame`).
    - Optimization of shuffling (Fisher-Yates).
    - Accessibility (a11y) improvements.
    - Centralization of constants.

## Non-Goals
- Implementation of PropTypes (explicitly excluded by user).
- Production deployment of the database.

## Technical Details
- Use React functional components and Hooks.
- CSS/SASS for styling (preferring Vanilla/Modules over Tailwind as per general directives, unless specifically requested otherwise, but the project already uses SASS).
- Node.js/Express for the backend.
