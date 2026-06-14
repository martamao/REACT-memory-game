# board-viewport-scaling

## Purpose
Responsive board sizing that keeps the memory game usable on height-limited viewports.

## Requirements

### Requirement: Height-aware board sizing
The game board (`.table`) MUST scale responsively with viewport constraints so it remains square and avoids unnecessary vertical scrolling on standard desktop, laptop, and tablet viewports.

#### Scenario: Verify board fits vertically
- **WHEN** the application is rendered on a viewport with limited height
- **THEN** the board scales down to fit within the available viewport space without causing avoidable vertical scrolling.
