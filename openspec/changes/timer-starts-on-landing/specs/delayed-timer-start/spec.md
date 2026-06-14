## ADDED Requirements

### Requirement: Timer starts on explicit start
The game timer SHALL NOT start upon initialization or game reset. The game timer SHALL start ONLY when the user clicks the "Start Game" button on the Landing Page.

#### Scenario: App loaded
- **WHEN** the app is initialized
- **THEN** the timer displays `00:00`
- **THEN** the timer does not increment

#### Scenario: Player starts game
- **WHEN** the player enters their name and clicks "Start Game"
- **THEN** the game view is displayed
- **THEN** the timer begins incrementing from `00:00`
