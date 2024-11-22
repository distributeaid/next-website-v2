module.exports = {
  theme: {
    extend: {
      fontFamily: {
        yantramanav: ['Yantramanav', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};