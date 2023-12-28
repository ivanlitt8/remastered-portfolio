import type { Config } from 'tailwindcss'

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180":{
      transform: "rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle: "preserve-3d",
    },
    ".perspective":{
      perspective: "3000px",
    },
    ".backface-hidden":{
      backfaceVisibility: "hidden",
    },
  });
});

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
  plugins: [Myclass],
};
export default config
