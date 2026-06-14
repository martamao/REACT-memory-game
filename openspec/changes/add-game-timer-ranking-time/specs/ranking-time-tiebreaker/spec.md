## ADDED Requirements

### Requirement: Ranking includes time
The ranking table MUST include each saved result's elapsed time.

#### Scenario: Ranking table displays time
- **WHEN** the Ranking view is rendered with saved results
- **THEN** each row shows player name, moves, and formatted time

### Requirement: Ranking uses time as tie-breaker
Ranking entries MUST be ordered by fewer moves first and, when moves are equal, by lower elapsed time first.

#### Scenario: Same moves different time
- **WHEN** two saved results have the same move count
- **THEN** the result with the lower elapsed time is ranked higher

#### Scenario: Different moves different time
- **WHEN** two saved results have different move counts
- **THEN** the result with fewer moves is ranked higher regardless of time
