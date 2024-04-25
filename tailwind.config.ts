import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // we can also use tailwind's other palettes, such as coolGray for text
        navy: {
          900: "#051E5E",
          800: "#082B76",
          700: "#09328B",
          600: "#224BA4",
          500: "#4362A6",
          400: "#8B9FC8",
          300: "#C5CFE4",
          200: "#DEE5F4",
          100: "#EEF4FD",
          50: "#F8FAFE",
        },

        purple: {
          500: "#8F97E5",
          400: "#9FA8FF",
          300: "#B6BCFF",
          200: "#CCD1FF",
          100: "#E3E5FF",
          50: "#EEF0FF",
        },

        rosemary: {
          900: "#523261",
          800: "#734973",
          500: "#A284B0",
          400: "#B493C4",
          300: "#C6ACD2",
          200: "#D7C6E0",
          100: "#E9DFEE",
          50: "#F2ECF5",
        },

        turquoise: {
          500: "#79D2E3",
          400: "#87E9FC",
          300: "#A8EFFD",
          200: "#C8F5FE",
          100: "#DEF9FE",
          50: "#E9FBFE",
        },

        beige: {
          500: "#E5DBCE",
          400: "#FFF3E5",
          300: "#FFF6EB",
          200: "#FFF9F1",
          100: "#FFFBF7",
          50: "#FFFDFA",
        },
        "light-brown": "#E3E5FF",
        "brown-800": "rgb(9 50 139)",

        "navy-400": "rgb(139 159 200)",
        "navy-600": "rgb(34 75 164)",

        "green-100": "#F8FAFE",
        "green-200": "#EEF4FD",
        "green-500": "#E9FBFE",

        "dark-blue": "#09328b",
        "text-blue": "#224ba4",

        "green-10": "#E9FBFE",
      },
      fontFamily: {
        lato: ["lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
