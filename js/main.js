const themeStylesheet = document.getElementById('theme-stylesheet');
const themeToggle = document.getElementById('theme-toggle');

function updateThemeButton() {
    if (themeStylesheet.getAttribute('href') === 'css/light-theme.css') {
        themeToggle.textContent = 'Tema oscuro';
        themeToggle.classList.remove('btn-light');
        themeToggle.classList.add('btn-dark');
    } else {
        themeToggle.textContent = 'Tema claro';
        themeToggle.classList.remove('btn-dark');
        themeToggle.classList.add('btn-light');
    }
}

themeToggle.addEventListener('click', () => {
    if (themeStylesheet.getAttribute('href') === 'css/light-theme.css') {
        themeStylesheet.setAttribute('href', 'css/dark-theme.css');
    } else {
        themeStylesheet.setAttribute('href', 'css/light-theme.css');
    }
    updateThemeButton();
});

// Inicializa el texto y el color del botón según el tema actual
updateThemeButton();
