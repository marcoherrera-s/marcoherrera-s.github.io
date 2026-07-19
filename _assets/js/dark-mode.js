document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.toggle-switch .checkbox');
    const htmlElement = document.documentElement;
    const highlightLight = document.getElementById('highlight-style-light');
    const highlightDark = document.getElementById('highlight-style-dark');

    // Aplica los estilos de resaltado de código según el tema activo
    function syncHighlight(isDark) {
        if (highlightLight) highlightLight.disabled = isDark;
        if (highlightDark) highlightDark.disabled = !isDark;
    }

    function enableDarkMode() {
        htmlElement.classList.add('dark-theme');
        syncHighlight(true);
        localStorage.setItem('theme', 'dark');
    }

    function disableDarkMode() {
        htmlElement.classList.remove('dark-theme');
        syncHighlight(false);
        localStorage.setItem('theme', 'light');
    }

    // Tema EFECTIVO real: el guardado manda; si no hay, la preferencia del SO.
    // Se calcula igual que el script inline del <head> para no desincronizar.
    function currentIsDark() {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') return true;
        if (stored === 'light') return false;
        return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    // Sincronizar SIEMPRE (ambos sentidos) el estado del toggle y del <html>
    // con el tema real. Esto evita que el navegador restaure un checkbox
    // "pegado" en un estado que no corresponde a la página (bug del botón raro
    // y del "vuelve a claro" al abrir una pestaña nueva).
    const isDark = currentIsDark();
    if (toggleSwitch) toggleSwitch.checked = isDark;
    htmlElement.classList.toggle('dark-theme', isDark);
    syncHighlight(isDark);

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

    // Si el usuario no ha elegido explícitamente, seguir la preferencia del SO
    // cuando ésta cambie (sin pisar una elección manual guardada).
    if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const onOsChange = function (e) {
            if (localStorage.getItem('theme')) return; // hay elección manual: respetarla
            htmlElement.classList.toggle('dark-theme', e.matches);
            syncHighlight(e.matches);
            if (toggleSwitch) toggleSwitch.checked = e.matches;
        };
        if (mq.addEventListener) mq.addEventListener('change', onOsChange);
        else if (mq.addListener) mq.addListener(onOsChange); // Safari viejo
    }
});
