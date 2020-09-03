module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        grey: {
          100: '#fbfbfb',
          200: '#f3f3f3',
          300: '#eaeaea',
          400: '#dcdcdc',
          500: '#bebebe',
          600: '#969696',
          700: '#646464',
          800: '#3c3c3c',
          900: '#282828',
        },
      },
      fontFamily: {
        headline: ['"Baloo 2"', 'sans-serif'],
        sans: [
          'Lato',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'last'],
  },
  plugins: [],
}
