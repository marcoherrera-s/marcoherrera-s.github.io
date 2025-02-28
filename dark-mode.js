document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.toggle-switch .checkbox');
    const darkModeStyle = document.getElementById('dark-mode-style');
    const highlightLight = document.getElementById('highlight-style-light');
    const highlightDark = document.getElementById('highlight-style-dark');
    const currentTheme = localStorage.getItem('theme');
  
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        darkModeStyle.disabled = false;
        highlightLight.disabled = true;
        highlightDark.disabled = false;
        localStorage.setItem('theme', 'dark');
    }
  
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        darkModeStyle.disabled = true;
        highlightLight.disabled = false;
        highlightDark.disabled = true;
        localStorage.setItem('theme', 'light');
    }
  
    // Aplicar el tema guardado en localStorage
    if (currentTheme === 'dark') {
        enableDarkMode();
        if (toggleSwitch) toggleSwitch.checked = true;
    }
  
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function () {
            if (this.checked) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });
    }
  });
  