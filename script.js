function cycleTheme() {
  const themes = ['light', 'dark', 'blue', 'green', 'sunset'];
  const body = document.body;
  const current = body.getAttribute('data-theme') || 'light';
  const idx = themes.indexOf(current);
  const next = themes[(idx + 1) % themes.length];
  body.setAttribute('data-theme', next);
}

