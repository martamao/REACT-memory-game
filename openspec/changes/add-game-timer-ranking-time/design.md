## Context

The game hook currently tracks `count`, `points`, `result`, and reset state. `Counter` renders moves and points. `Ranking` currently shows player and moves only. The ranking persistence change will introduce LocalStorage entries; this timer change should provide the `time` field those entries need.

## Goals / Non-Goals

**Goals:**
- Show elapsed time as `MM:SS`, starting at `00:00`.
- Stop timing when the game finishes or times out.
- End the game at 15 minutes.
- Exclude timed-out results from LocalStorage ranking saves.
- Display time in Ranking and use it to break ties after moves.

**Non-Goals:**
- Backend persistence.
- Pausing/resuming games.
- Saving in-progress timer state across reloads.

## Decisions

### 1. Store elapsed seconds in the game hook

Track elapsed time as seconds in `useMemoryGame`, derive `MM:SS` for display, and reset seconds when the game resets. This keeps timing close to game state.

Alternative considered: keep timer state only in `Counter`. That would make display simple but would not let game completion, timeout, and ranking persistence use the value consistently.

### 2. Represent timeout separately from success

The hook should distinguish a successful completion from a timeout so timed-out games can show an end state but avoid ranking saves.

Alternative considered: reuse `result` for both success and timeout. That is ambiguous for saving behavior.

### 3. Sort ranking by moves then time

Ranking entries should compare `moves` first and `timeSeconds` second. Lower values win. The table can render formatted time while storing numeric seconds.

Alternative considered: sort by points as well. Points are currently equivalent to matched pairs and do not add useful ranking order once a game is completed.

## Risks / Trade-offs

- Timer intervals can leak if not cleaned up. Mitigation: create and clear the interval inside a React effect with clear exit conditions.
- Timer and LocalStorage changes are related. Mitigation: keep this change focused on providing time data and ranking time behavior; persistence helpers should own storage details.
- The UI may need more horizontal space in the counter and ranking table. Mitigation: adjust SCSS responsively.
