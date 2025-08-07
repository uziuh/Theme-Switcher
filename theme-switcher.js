
(function () {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const darkThemeClass = 'dark-theme';
  const storageKey = 'glassmorphic-theme';
  function loadTheme() {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === 'dark') {
      body.classList.add(darkThemeClass);
      toggleBtn.textContent = 'Switch to Light';
    } else {
      body.classList.remove(darkThemeClass);
      toggleBtn.textContent = 'Switch to Dark';
    }
  }
  function toggleTheme() {
    if (body.classList.contains(darkThemeClass)) {
      body.classList.remove(darkThemeClass);
      localStorage.setItem(storageKey, 'light');
      toggleBtn.textContent = 'Switch to Dark';
    } else {
      body.classList.add(darkThemeClass);
      localStorage.setItem(storageKey, 'dark');
      toggleBtn.textContent = 'Switch to Light';
    }
  }
  toggleBtn.addEventListener('click', toggleTheme);
  loadTheme();
})();
