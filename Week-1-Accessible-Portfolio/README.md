# Kaustubh Jadhav — Accessible Portfolio

A four-page portfolio using semantic HTML, native links and form controls, and a shared stylesheet.

## Start here

1. Open `index.html` in a browser. No installation is required.
2. Open the same folder in a text editor such as VS Code.
3. Update the biography, technology list, and project cards as your experience grows.
5. Change colors and spacing in `styles.css`; HTML describes the content and CSS controls its appearance.
6. Test every link, resize the browser, and use Tab, Shift+Tab, and Enter to move around. On each page, press Tab at the very start to reveal “Skip to main content.”
7. Validate each HTML file with the [W3C HTML Checker](https://validator.w3.org/). Fix errors before moving on.
8. Run Lighthouse in Chrome DevTools after publishing or serving the site. Fix any issues it reports and check the pages again.

## Files

- `index.html` — home page
- `about.html` — introduction and learning goals
- `projects.html` — project cards
- `contact.html` — accessible contact form
- `styles.css` — shared visual styles and small-screen layout

## Accessibility choices to notice

- Each page has a language, a unique title and description, one page-level heading, a skip link, and one main content area.
- The header, navigation, main content, sections, articles, and footer use elements that describe their purpose.
- Native links, buttons, labels, and inputs provide familiar keyboard and screen-reader behavior. ARIA is used only for navigation labels, the current page, and a section heading relationship.
- Each page has one `h1`; the following headings step down in order. Generic wrappers are avoided where a meaningful element or simple paragraph fits. The few `span` elements only mark decorative text for styling.
- Focus is visible, required fields are marked in text, and the form labels are explicitly connected to their controls.
- The form currently opens the visitor’s email app. For direct website submissions, connect a form provider or server and update the form action.

The site is designed to support accessibility and search discovery, but a Lighthouse score depends on the final content, hosting, browser, and audit conditions. Run the audits and address their findings rather than assuming a particular score.

## What the tutorial demonstrates

The linked tutorial builds up a semantic page with a heading outline, `header`, `nav`, `main`, and `footer`, then discusses when `article` and `section` make sense. It also shows optional examples such as `aside`, `details`/`summary`, `mark`, and `time`. Use those only when they match the meaning of your own content; adding a semantic element just to include more tags does not improve the page.

