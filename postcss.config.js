module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-nested': {}, // Adds sass style nesting supporting.
    // Below are the default options that Next.JS uses.
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
}
