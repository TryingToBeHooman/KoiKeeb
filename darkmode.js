const darkModeToggle = document.getElementById('dark-mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        body.style.backgroundColor = '#1e2022';
    } else {
        body.style.backgroundColor = '';
    }

    modeIcon.classList.toggle('fa-moon');
    modeIcon.classList.toggle('fa-sun');
});