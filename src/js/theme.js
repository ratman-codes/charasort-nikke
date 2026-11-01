/**
 * Light / dark toggle. Light by default; the button flips to the opposite of whatever is
 * showing and remembers the choice in localStorage.
 */
(function () {
  const root = document.documentElement;
  const button = document.querySelector('.theme.toggle');
  if (!button) return;

  /** Light unless the user has switched to dark; the OS setting is not consulted. */
  const current = () => root.dataset.theme || 'light';

  const label = () => {
    button.textContent = current() === 'dark' ? '☀ Light mode' : '☾ Dark mode';
  };

  button.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });

  label();
})();
