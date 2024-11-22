export const theme = {
  extend: {
    fontFamily: {
      yantramanav: ['Yantramanav', 'sans-serif'],
    },
  },
};
export const plugins = [
  require('postcss-import'),
  require('tailwindcss'),
  require('autoprefixer'),
];