## Context

LandingPage renders three `.retroLetter` spans. Each span has a black `border-bottom` and renders either a typed letter or `_`. Because the underscore text is colored orange and the border is black, empty slots look duplicated.

## Goals / Non-Goals

**Goals:**
- Keep the black underline slots visible.
- Hide the orange underscore placeholders when no letter has been typed.
- Avoid changing input behavior.

**Non-Goals:**
- Changing input validation, max length, or allowed characters.
- Changing the start button behavior.

## Decisions

### 1. Remove placeholder characters at render time

Keep the existing spans but render an empty string for missing letters instead of `_`. The black `border-bottom` remains the visible empty-slot marker, while typed letters stay visible in the existing orange style.

Alternative considered: use CSS only. That is not reliable because the current markup does not expose whether a `.retroLetter` contains a placeholder or a typed letter.

## Risks / Trade-offs

- Empty spans must preserve their slot height and underline. Mitigation: keep the existing dimensions in SCSS and adjust only if needed.
