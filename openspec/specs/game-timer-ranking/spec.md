# Spec: Game Timer and Ranking Integration

## Purpose
This specification covers requirements for the elapsed game timer, the 15-minute timeout mechanism, and the integration of time into the ranking table, including tie-breaking logic.

## Requirements

### Requirement: Active game timer with timeout
The game SHALL have an elapsed timer that starts only when the user explicitly starts the game from the landing page. The game SHALL end automatically if the elapsed time reaches 15 minutes (900 seconds).

#### Scenario: Timer starts on active play
- **WHEN** the player clicks "Start Game" on the landing page
- **THEN** the timer begins incrementing

#### Scenario: Fifteen minute timeout
- **WHEN** the elapsed time reaches 15:00
- **THEN** the game ends
- **THEN** the result is not saved in the ranking

### Requirement: Ranking includes time and sorting tie-breakers
The ranking table SHALL display the elapsed time for each saved result and SHALL order results by moves (asc) followed by time (asc).

#### Scenario: Ranking table display
- **WHEN** the ranking table is rendered
- **THEN** it displays the elapsed time for each result

#### Scenario: Tie-breaker ranking
- **WHEN** two results have the same number of moves
- **THEN** the result with the lower elapsed time is ordered higher
