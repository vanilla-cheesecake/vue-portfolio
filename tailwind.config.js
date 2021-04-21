module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/background.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
