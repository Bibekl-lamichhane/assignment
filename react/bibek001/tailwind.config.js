/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/theme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    // or you can use a glob pattern (multiple component styles)
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'iblack':'#1C1C1C',
        'iwhitish':'#D4D4D2',
        'iorange' :'#FF9500',
        'igrey':'#505050'
      },
    },
  
  },
  darkMode: "class",
  plugins: [nextui()],
};
