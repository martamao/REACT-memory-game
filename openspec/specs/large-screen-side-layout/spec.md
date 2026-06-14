# large-screen-side-layout

## Purpose
Large-screen game layout that uses horizontal space so the card board can remain prominent while finished-game actions stay visible.

## Requirements

### Requirement: Large-screen side layout for finished game
The game view MUST place the card board and the finished-game result controls side by side on large screens using only stylesheet changes.

#### Scenario: Finished game on large screen
- **WHEN** the game is rendered on a large viewport and the player has completed all pairs
- **THEN** the card board is displayed on one side and the result message with reset/ranking buttons is displayed on the other side

#### Scenario: Finished game preserves button condition
- **WHEN** the player has not completed the game
- **THEN** no styling change requires result buttons to appear before the existing game logic renders them

### Requirement: Larger board on large screens
The game board MUST use more available large-screen space than the previous tight viewport-height cap while remaining square and avoiding unnecessary vertical overflow on standard desktop and laptop viewports.

#### Scenario: In-progress game on large screen
- **WHEN** the game is rendered on a large viewport before completion
- **THEN** the board remains visually centered and can grow larger than the previous height-limited layout

#### Scenario: Finished game avoids unnecessary scroll
- **WHEN** the game is rendered on a standard large viewport after completion
- **THEN** the board, result message, and action buttons fit without requiring avoidable vertical scrolling

### Requirement: Small-screen stacked layout
The game view MUST keep the existing stacked layout on small screens so the board, message, and buttons remain readable and usable.

#### Scenario: Finished game on small screen
- **WHEN** the game is rendered on a small viewport after completion
- **THEN** the board, result message, and action buttons are stacked vertically
