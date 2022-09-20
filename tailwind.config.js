module.exports = {
  content: [
    './{common,components,pages,src,styles}/**/*.{jsx,css,scss}',
    '!/**/*.test.js*',
  ],
  theme: {
    extend: {
      height: {
        22: '88px',
      },
      inset: {
        18: '88px',
      },
      colors: {
        'regal-green': '#008594',
      },
    },
  },
  plugins: [],
}
