## ADDED Requirements

### Requirement: Return to LandingPage button
The game view MUST provide a button that returns the player to LandingPage so they can change the username.

#### Scenario: Player returns to LandingPage
- **WHEN** the player clicks the return-to-landing button during a game
- **THEN** the app displays LandingPage
- **THEN** the player can enter a new three-letter username

### Requirement: Return action resets active game
Returning to LandingPage MUST reset the active game state and MUST NOT save unfinished results.

#### Scenario: Unfinished game is discarded
- **WHEN** the player returns to LandingPage before completing all pairs
- **THEN** the active cards, moves, points, matches, and result state are reset
- **THEN** no ranking result is saved for that unfinished game

#### Scenario: New player starts clean game
- **WHEN** the player enters a new username after returning to LandingPage
- **THEN** the next game starts with a fresh shuffled board, zero moves, and zero points
