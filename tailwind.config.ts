import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaryLight': '#FFF1DD',
        'secondaryLight': '#252525',
        'colorLight': '#000000',
        'hoverLight': '#545454',
        'activeLight': '#FFFFFF',
        'primaryDark': '#272329',
        'secondaryDark': '#C1CCD6',
        'colorDark': '#C1CCD6',
        'hoverDark': '#C1CCD6',
        'activeDark': '#272329',
        },
    },
  },
  plugins: [],
}
export default config
