export const darkModeHandle = () => {
    const darkModeSwitcher = document.querySelector('#toggleDarkMode');
    const page = document.querySelector('#page');

    if (localStorage.getItem('mode') === 'dark') {
        page.classList.add('dark');
        darkModeSwitcher.checked = true;
    }

    darkModeSwitcher.addEventListener('change', () => {
        page.classList.toggle('dark');

        if (page.classList.contains('dark')) {
            localStorage.setItem('mode', 'dark');
        } else {
            localStorage.setItem('mode', 'ligth');
        }
    });
}