function cycleTheme() {
  const themes = ['light', 'dark', 'blue', 'green', 'sunset'];
  const body = document.body;
  const current = body.getAttribute('data-theme') || 'light';
  const index = themes.indexOf(current);
  const next = themes[(index + 1) % themes.length];
  body.setAttribute('data-theme', next);
}

// Hamburger Menu Toggle
document.getElementById('hamburger').addEventListener('click', function () {
  const navbarMenu = document.getElementById('navbar-menu');
  navbarMenu.classList.toggle('active');
});
