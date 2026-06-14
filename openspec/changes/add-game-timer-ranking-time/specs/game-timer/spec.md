## ADDED Requirements

### Requirement: Active game timer display
The game view MUST display an elapsed-time timer in `MM:SS` format alongside moves and points.

#### Scenario: Game starts
- **WHEN** a player starts a new game
- **THEN** the timer displays `00:00`

#### Scenario: Time progresses
- **WHEN** the player is actively playing
- **THEN** the timer increases once per second

### Requirement: Timer reset and stop behavior
The timer MUST reset with a new game and MUST stop when the game ends.

#### Scenario: Game reset
- **WHEN** the player resets the game
- **THEN** the timer returns to `00:00`

#### Scenario: Game completed
- **WHEN** the player completes all pairs
- **THEN** the timer stops at the completion time

### Requirement: Fifteen-minute timeout
The game MUST end when elapsed time reaches 15 minutes and MUST NOT save that timed-out result.

#### Scenario: Timer reaches limit
- **WHEN** elapsed time reaches `15:00`
- **THEN** the game ends in a timeout state
- **THEN** no ranking entry is saved for that game
