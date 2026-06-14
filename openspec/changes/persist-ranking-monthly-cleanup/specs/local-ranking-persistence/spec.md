## ADDED Requirements

### Requirement: Completed results persist locally
The app MUST save completed game results to LocalStorage and display them in the ranking table.

#### Scenario: Completed game is saved
- **WHEN** the player completes all pairs
- **THEN** the completed result is stored in LocalStorage with the player name and game stats

#### Scenario: Ranking displays saved results
- **WHEN** the Ranking view is opened
- **THEN** it displays LocalStorage ranking entries instead of mock ranking data

### Requirement: Unfinished games are not saved
The app MUST NOT save results for games that are reset, abandoned, returned to LandingPage, or otherwise unfinished.

#### Scenario: Player abandons game
- **WHEN** the player leaves an unfinished game
- **THEN** no ranking entry is created for that game

### Requirement: Monthly ranking cleanup
The app MUST clear saved LocalStorage ranking data periodically every month.

#### Scenario: New month starts
- **WHEN** the app reads or writes ranking data and the stored cleanup period is older than the current month
- **THEN** stale ranking entries are cleared before new ranking data is used

#### Scenario: Same month continues
- **WHEN** the app reads or writes ranking data within the same stored month
- **THEN** existing ranking entries remain available
