## ADDED Requirements

### Requirement: Viewport-height constraint on board size
The game board (`.table`) MUST scale down responsively based on the viewport height so that its maximum width is constrained by the vertical height (e.g. `max-width: 55vh;` or `55dvh;`).

#### Scenario: Verify board fits vertically
- **WHEN** the application is rendered on a viewport with limited height
- **THEN** the board scales down to fit within the viewport, and no vertical scrollbar is displayed on the page.
