const colors = require('tailwindcss/colors')
const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
	presets: [sharedConfig],
	theme: {
		extend: {
			colors: {
				primary: colors.green,
				secondary: colors.stone,
				gray: colors.gray,
			},
		},
	},
	plugins: [],
}
