## 1. Global Variables & Dark Mode Removal

- [x] 1.1 Remove the inline script block for checking the dark theme from `<head>` in `index.html`.
- [x] 1.2 Remove the `.theme-dark` block and associated comments in `src/App.scss`.
- [x] 1.3 Change `--card-front` in `src/App.scss` from `#ffffff` to `#ffece0` for the light theme.

## 2. Card Styling

- [x] 2.1 Update `.card` border in `src/styles/Card.scss` to be `4px solid #000000` and set `border-radius: 0;` for sharp corners.
- [x] 2.2 Add CSS rule targeting `.itsAMatch .back` in `src/styles/Card.scss` to set `background-color: var(--color-accent)` so that matched cards change background color on matches.
- [x] 2.3 Set `container-type: inline-size;` on `.card` in `src/styles/Card.scss`.
- [x] 2.4 Update `.front` and `.back` font-size to `65cqw` and remove older font-size overrides in `src/styles/Card.scss`.
- [x] 2.5 Verify styling and layout responsiveness on both desktop and mobile views.
