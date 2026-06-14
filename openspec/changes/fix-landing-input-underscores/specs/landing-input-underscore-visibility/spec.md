## ADDED Requirements

### Requirement: Empty player slots show only black underlines
The LandingPage player-name input MUST show black underline slots for empty letters and MUST NOT show orange underscore placeholder characters.

#### Scenario: Empty player input
- **WHEN** the LandingPage is rendered before the player types a name
- **THEN** the three black underline slots are visible
- **THEN** orange underscore characters are not visible

#### Scenario: Typed player letters
- **WHEN** the player types valid letters into the name input
- **THEN** the typed letters are visible in the existing retro style
- **THEN** the black underline slots remain visible
