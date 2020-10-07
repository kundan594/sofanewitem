// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/1-3": "70vh",
        "screen/1-4": "80vh",
        "h-72": "20rem",
        "h-80": "24rem",
        "h-82": "25rem",
        "h-88": "28rem",
      }),
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}