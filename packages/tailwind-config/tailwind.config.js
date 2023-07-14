/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defautTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			xs: '375px',
			...defautTheme.screens,
		},
		extend: {
			colors: {
				primary: colors.green,
				secondary: colors.amber,
			},
		},
		fontFamily: {
			sans: ['Mulish', 'sans-serif'],
		},
	},
	plugins: [],
}
