/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/index.html', './src/**/*.{html,ts,tsx,js,jsx}'],
    theme: {
        extend: {
            colors: {
                fundo: {
                    DEFAULT: '#282a36',
                    claro: '#3c3e4f',
                    dark: '#1c1d26',
                },
                offwhite: {
                    DEFAULT: '#f8f8f2',
                    light: '#ffffff',
                    dark: '#e0e0d4',
                },
                cinzaAzulado: {
                    DEFAULT: '#6272a4',
                    light: '#7f8abf',
                    dark: '#4b5980',
                },
                cinza: {
                    DEFAULT: '#44475a',
                    light: '#5c5f72',
                    dark: '#2e2f3c',
                },
                ciano: {
                    DEFAULT: '#8be9fd',
                    light: '#a4f2ff',
                    dark: '#6acde8',
                },
                verde: {
                    DEFAULT: '#50fa7b',
                    light: '#73ffa0',
                    dark: '#3ad95e',
                },
                laranja: {
                    DEFAULT: '#ffb86c',
                    light: '#ffcc99',
                    dark: '#e69a50',
                },
                rosa: {
                    DEFAULT: '#ff79c6',
                    light: '#ff9dd5',
                    dark: '#e65aa9',
                },
                roxo: {
                    DEFAULT: '#bd93f9',
                    light: '#d3b4ff',
                    dark: '#9b76e0',
                },
                vermelho: {
                    DEFAULT: '#ff5555',
                    light: '#ff7f7f',
                    dark: '#e63b3b',
                },
                amarelo: {
                    DEFAULT: '#f1fa8c',
                    light: '#fcffb2',
                    dark: '#d8e374',
                },
            },
            fontFamily: {
                principal: ['Zain', 'sans-serif'],
                secundaria: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
