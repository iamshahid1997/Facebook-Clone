module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'almost': 'calc(-3.5rem + 100vh)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
