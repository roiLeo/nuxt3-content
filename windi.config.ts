import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
	darkMode: 'class',
	plugins: [typography],
	content: ['content/**/*.{md,yml,json,json5,csv}'],
	theme: {
		extend: {
			colors: {
				// Customize the feeling of your site
				gray: colors.zinc
			}
		}
	}
})
