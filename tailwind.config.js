// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
	  },
	  height: {
		xs: "20rem",
		sm: "24rem"
	  }
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}