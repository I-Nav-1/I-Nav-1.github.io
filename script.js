function cycleTheme() {
  const themes = ['light', 'dark', 'blue'];
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme') || 'light';

  let nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
  let nextTheme = themes[nextIndex];

  body.setAttribute('data-theme', nextTheme);
}
