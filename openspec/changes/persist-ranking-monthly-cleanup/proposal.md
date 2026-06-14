## Why

The README describes a local Top 5 ranking saved in LocalStorage, but the current `Ranking.jsx` uses mock data and no LocalStorage persistence exists. The ranking should store completed results locally and periodically clear old saved data so users do not keep results forever.

## What Changes

- Replace mock ranking data with LocalStorage-backed ranking data.
- Save only completed games.
- Keep ranking ordered by best performance.
- Add monthly cleanup so stored ranking data expires periodically.
- File category: **JSX/lógica + otros**.

## Capabilities

### New Capabilities
- `local-ranking-persistence`: LocalStorage persistence and monthly cleanup for completed ranking results.

### Modified Capabilities
<!-- None -->

## Impact

- `src/components/Ranking.jsx`: Read and display saved ranking data.
- `src/App.jsx` and/or `src/hooks/useMemoryGame.js`: Save completed results at the correct moment.
- Potential new utility file under `src/` for LocalStorage helpers.
- No backend, server, or database changes.
