(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  const label = button.querySelector("[data-theme-label]");
  const icon = button.querySelector("[data-theme-icon]");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storageKey = "kaustubh-portfolio-theme";
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch {
    // The switch still works for this visit when browser storage is unavailable.
  }

  let hasSavedChoice = savedTheme === "light" || savedTheme === "dark";
  root.dataset.theme = hasSavedChoice ? savedTheme : systemTheme.matches ? "dark" : "light";

  function updateButton() {
    const dark = root.dataset.theme === "dark";
    button.setAttribute("aria-pressed", String(dark));
    button.setAttribute("aria-label", `${dark ? "Dark" : "Light"} theme is active. Switch theme.`);
    label.textContent = dark ? "Dark mode" : "Light mode";
    icon.textContent = dark ? "☾" : "☀";
  }

  button.addEventListener("click", () => {
    hasSavedChoice = true;
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(storageKey, root.dataset.theme);
    } catch {
      // Keep the selected theme until this page is closed.
    }
    updateButton();
  });

  systemTheme.addEventListener("change", (event) => {
    if (!hasSavedChoice) {
      root.dataset.theme = event.matches ? "dark" : "light";
      updateButton();
    }
  });

  updateButton();
})();

