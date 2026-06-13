## ADDED Requirements

### Requirement: Production build in docs folder
The system MUST be able to generate a production build of the application and store it in the `docs/` folder for GitHub Pages hosting.

#### Scenario: Run build command
- **WHEN** the command `npm run build` is executed
- **THEN** the `docs/` folder MUST be updated with the latest production-ready files (HTML, JS, CSS).

### Requirement: Relative paths in build
The production build MUST use relative paths to ensure it works correctly when hosted on GitHub Pages (e.g., under a subpath).

#### Scenario: Verify build assets
- **WHEN** the build is generated
- **THEN** the `index.html` file SHOULD use relative paths for its assets.
