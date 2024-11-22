import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
  plugins: [postcssImport(), tailwindcss, autoprefixer],
};

export default config;
