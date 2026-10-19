# Week 2: Advanced CSS3 & Responsive Architecture

This is the Week 2 visual and responsive edition of the semantic portfolio from Week 1. Its visual direction is inspired by Kaustubh’s original portfolio and keeps the personal site organized across four pages.

## View the site

Open `index.html` in a browser. All four pages, `styles.css`, and the theme switch script are in this folder.

## What changed in Week 2

- The home-about and project areas use CSS Grid for two-dimensional layouts.
- Navigation, action links, cards, and the footer use Flexbox for alignment and wrapping.
- The stylesheet starts with a single-column, small-screen layout, then adds tablet and desktop layouts at `42rem` and `68rem`.
- Color, spacing, typography, borders, and shadows are CSS custom properties in `:root`.
- The accessible theme button starts with the visitor’s system preference and remembers a manual light/dark selection in the browser.
- The homepage features project links; the About page includes a skills list and internship experience.
- A small JavaScript file powers the theme button. CSS variables provide the light and dark palettes.
- A reduced-motion query respects visitors who ask their device to reduce animation.

## Learn by changing it

1. Change a color token near the top of `styles.css` and watch the shared site colors update.
2. Use the theme button to switch between light and dark mode.
3. Narrow and widen the browser window to see the tablet and desktop grid breakpoints.
4. Try keyboard navigation and confirm that focus remains visible in both color themes.

This folder is the Week 2 iteration; Week 1 remains available in its own folder in the repository.

