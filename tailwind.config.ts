/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html', './src/**/*.{html,ts,tsx,js,jsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
