## Context

The project has evolved significantly since the initial version. New features like the Landing Page, the Ranking system, and a retro aesthetic have been implemented. The current `README.md` is outdated and doesn't mention these features. Also, the production build in the `docs/` folder needs to be updated to include these changes for GitHub Pages.

## Goals / Non-Goals

**Goals:**
- Update `README.md` with current project information and features.
- Ensure the `docs/` folder contains the latest production build.
- Maintain Spanish as the language for documentation.

**Non-Goals:**
- Adding new features to the game.
- Refactoring the core game logic (unless necessary for the build).

## Decisions

### Update README.md Content
**Decision**: Complete rewrite or major update of the `README.md` to include:
- Description of the new retro aesthetic.
- Details about the Landing Page and Ranking system.
- Instructions on how to use the new features.
**Rationale**: The current README is too basic and refers to an older version of the project.

### Use `npm run build` for `docs/` folder
**Decision**: Execute the existing `build` script which is configured to output to `docs/`.
**Rationale**: `vite.config.js` is already set up to use `docs/` as the `outDir`, making it compatible with GitHub Pages.

## Risks / Trade-offs

- **[Risk]** The production build might have broken paths. → **Mitigation**: Ensure `base: "./"` is set in `vite.config.js` (already verified).
- **[Risk]** Overwriting `docs/` might lose some specific GitHub Pages files (like CNAME if it existed). → **Mitigation**: Check for existing files before building.
