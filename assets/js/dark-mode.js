document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.toggle-switch .checkbox');
    const htmlElement = document.documentElement;
    const highlightLight = document.getElementById('highlight-style-light');
    const highlightDark = document.getElementById('highlight-style-dark');
    const currentTheme = localStorage.getItem('theme');
  
    function enableDarkMode() {
        htmlElement.classList.add('dark-theme');
        if (highlightLight) highlightLight.disabled = true;
        if (highlightDark) highlightDark.disabled = false;
        localStorage.setItem('theme', 'dark');
    }
  
    function disableDarkMode() {
        htmlElement.classList.remove('dark-theme');
        if (highlightLight) highlightLight.disabled = false;
        if (highlightDark) highlightDark.disabled = true;
        localStorage.setItem('theme', 'light');
    }
  
    // Sincronizar el estado del toggle con el tema actual
    // (el tema ya fue aplicado por el script inline en <head>)
    if (currentTheme === 'dark') {
        if (toggleSwitch) toggleSwitch.checked = true;
        // Aplicar también los highlight styles
        if (highlightLight) highlightLight.disabled = true;
        if (highlightDark) highlightDark.disabled = false;
    }
  
    // Listener para el toggle switch
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
