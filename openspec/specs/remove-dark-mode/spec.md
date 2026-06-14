# remove-dark-mode

## Purpose
Removal of all dark mode styles and scripts from the application.

## Requirements

### Requirement: Remove dark theme loader script
The inline JavaScript block within `index.html` that reads the theme option from `localStorage` and appends `theme-dark` to the document element MUST be removed.

#### Scenario: Verify index.html does not contain theme script
- **WHEN** the `index.html` file is loaded
- **THEN** it does not execute any theme-detection script or modify the document root class with `theme-dark`.

### Requirement: Remove dark theme variables and styles
The `.theme-dark` CSS selector and all of its associated color variable overrides MUST be removed from `src/App.scss`.

#### Scenario: Verify App.scss is clean of theme-dark rules
- **WHEN** `src/App.scss` is parsed or compiled
- **THEN** there are no `.theme-dark` styles or selectors present.
