import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { sharedConfig } from 'ui/tailwind.config'
import { overrideStylesPlugin } from 'ui/src/lib/overrideStylesPlugin'
import { styles } from './src/lib/styles/styles'
//import { defaultStyles } from 'ui/src/styles/styles'

const appStyles = overrideStylesPlugin(styles)
const config = {
	presets: [sharedConfig],
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: colors.green,
				secondary: colors.stone,
				gray: colors.gray,
			},
		},
	},
	plugins: [appStyles],
} satisfies Config

export default config
