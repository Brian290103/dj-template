import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        display: ['nunito'],
        dosis: ['dosis'],
        rockville: ['Rockville Solid'],
      },
    },
  },
  plugins: [],
}
export default config
