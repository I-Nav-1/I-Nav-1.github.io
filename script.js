function cycleTheme() {
  const themes = ['light', 'dark', 'blue', 'green', 'sunset'];
  const body = document.body;
  const current = body.getAttribute('data-theme') || 'light';

  const currentIndex = themes.indexOf(current);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  body.setAttribute('data-theme', nextTheme);
}
