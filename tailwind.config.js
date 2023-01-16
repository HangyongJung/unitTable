const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
      orange: colors.orange,
      slate: colors.slate,
      teal: colors.teal,
      cyan: colors.cyan,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      sky: colors.sky,
      amber: colors.amber,
      seiyonblue: "#3094c6",
      seiyonlightblue: "#5bc0de",
      seiyongray: "#f2f2f2",
      seiyonbordergray: "#e0e3e6",
      seiyonslate: "#f8f9fa"
    },
    screens: {
      'mobile-size': { 'max': '639px' },
      'desktop-size': '640px',
    }
  },
  plugins: [
  ],
}