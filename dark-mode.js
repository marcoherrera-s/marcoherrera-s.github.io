document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.querySelector('.toggle-switch .checkbox');
  const darkModeStyle = document.getElementById('dark-mode-style');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      darkModeStyle.disabled = false;
      if (toggleSwitch) {
          toggleSwitch.checked = true;
      }
  }

  if (toggleSwitch) {
      toggleSwitch.addEventListener('change', function () {
          if (this.checked) {
              document.body.classList.add('dark-mode');
              darkModeStyle.disabled = false;
              localStorage.setItem('theme', 'dark');
          } else {
              document.body.classList.remove('dark-mode');
              darkModeStyle.disabled = true;
              localStorage.setItem('theme', 'light');
          }
      });
  }
});
