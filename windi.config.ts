import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: ['./**/*.html']
  },
  preflight: false,
  safelist: ['prose', 'prose-sm', 'm-auto'],
  darkMode: 'class',
  plugins: [typography, require('windicss/plugin/filters'), require('windicss/plugin/forms'), require('windicss/plugin/aspect-ratio'), require('windicss/plugin/line-clamp')],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: colors.zinc
        // gray: colors.fuchsia
      }
    }
  }
})
