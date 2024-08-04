/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/index.html', './src/**/*.{html,ts,tsx,js,jsx}'],
    theme: {
        extend: {
            colors: {
                fundo: '#282a36',
                offwhite: '#f8f8f2',
                cinzaAzulado: '#6272a4',
                cinza: '#44475a',
                ciano: '#8be9fd',
                verde: '#50fa7b',
                laranja: '#ffb86c',
                rosa: '#ff79c6',
                roxo: '#bd93f9',
                vermelho: '#ff5555',
                amarelo: '#f1fa8c',
            },
            fontFamily: {
                principal: ['Zain', 'sans-serif'],
                secundaria: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};