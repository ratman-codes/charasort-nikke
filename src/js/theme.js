/**
 * Light / dark toggle. With no saved choice the page follows the OS setting; the button
 * flips to the opposite of whatever is showing and remembers it in localStorage.
 */
(function () {
  const root = document.documentElement;
  const button = document.querySelector('.theme.toggle');
  if (!button) return;

  const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const current = () => root.dataset.theme || (prefersDark() ? 'dark' : 'light');

  const label = () => {
    button.textContent = current() === 'dark' ? '☀ Light mode' : '☾ Dark mode';
  };

  button.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', label);
  label();
})();
