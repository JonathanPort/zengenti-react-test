// TODO: Integrate redux to demonstrate store usage

export default {

    localStorageKey: 'user_dark_mode_preference',
    userOverideTheme: false,
    darkModeDetector: '(prefers-color-scheme: dark)',
    themes: ['light', 'dark'],


    startSystemDarkModeWatcher(callback) {

        window.matchMedia(this.darkModeDetector)
            .addEventListener('change', (e) => callback());

    },


    detectSystemTheme() {

        const isDarkMode = window.matchMedia(this.darkModeDetector).matches;

        return isDarkMode ? 'dark' : 'light';

    },


    setTheme(themeName) {

        const body = document.querySelector('body');

        for (let i = 0; i < this.themes.length; i++) {
            body.classList.remove('theme--' + this.themes[i]);
        }

        body.classList.add('theme--' + themeName);

    },


}
