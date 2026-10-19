# Week 2: Advanced CSS3 & Responsive Architecture

This is the Week 2 visual and responsive edition of the semantic portfolio from Week 1. It uses CSS Grid for page-level layouts, Flexbox for navigation and grouped controls, mobile-first breakpoints, reusable design tokens, and an automatic light/dark theme.

## View the site

Open `index.html` in a browser. The page links work locally because all four HTML pages and `styles.css` are in this folder.

## What changed in Week 2

- The home-about and project areas use CSS Grid for two-dimensional layouts.
- Navigation, action links, cards, and the footer use Flexbox for alignment and wrapping.
- The stylesheet starts with a single-column, small-screen layout, then adds tablet and desktop layouts at `42rem` and `68rem`.
- Color, spacing, typography, borders, and shadows are CSS custom properties in `:root`.
- The `prefers-color-scheme: dark` media query overrides the same color tokens, so the site automatically follows the visitor’s system theme without JavaScript.
- A reduced-motion query respects visitors who ask their device to reduce animation.

## Learn by changing it

1. Change a color token near the top of `styles.css` and watch the shared site colors update.
2. Switch your operating system or browser appearance between light and dark to see the palette change.
3. Narrow and widen the browser window to see the tablet and desktop grid breakpoints.
4. Try keyboard navigation and confirm that focus remains visible in both color themes.

This folder is the Week 2 iteration; Week 1 remains available in its own folder in the repository.

