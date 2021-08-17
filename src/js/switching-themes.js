const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

themeSwitcher.addEventListener('change', onThemeSwitch);

onThemeLoad();

function onThemeSwitch(e) {
  if (e.currentTarget.checked) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

function onThemeLoad() {
  let savedSettings = localStorage.getItem('Theme');

  if (savedSettings === Theme.DARK) {
    themeSwitcher.checked = true;
    bodyRef.classList.add('dark-theme');
  } else {
    themeSwitcher.checked = false;
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
  }
}
