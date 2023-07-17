import plugin from 'tailwindcss/plugin'

export const overrideStylesPlugin = (overrideStyles: {}) => {
	return plugin(function ({ addBase }) {
		addBase(overrideStyles)
	})
}
