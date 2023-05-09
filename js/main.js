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

function changeNavbarTogglerIconColor() {
    const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const isDarkTheme = themeStylesheet.getAttribute('href') === 'css/dark-theme.css';

    if (isDarkTheme) {
        navbarTogglerIcon.style.filter = 'invert(0%)';
        navbarToggler.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    } else {
        navbarTogglerIcon.style.filter = 'invert(100%)';
        navbarToggler.style.borderColor = 'rgba(0, 0, 0, 0.1)';
    }
}

themeToggle.addEventListener('click', () => {
    if (themeStylesheet.getAttribute('href') === 'css/light-theme.css') {
        themeStylesheet.setAttribute('href', 'css/dark-theme.css');
    } else {
        themeStylesheet.setAttribute('href', 'css/light-theme.css');
    }
    updateThemeButton();
    changeNavbarTogglerIconColor();
});

// Inicializa el texto y el color del botón según el tema actual
updateThemeButton();
changeNavbarTogglerIconColor();
