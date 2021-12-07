module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#ECF4FF',
      secondary: '#EAF0FF',
      tertiary: '#F8FBFF',
      dark: '#164360',
      white: '#FFFFFF',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
