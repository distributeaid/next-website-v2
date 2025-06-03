import type { Config } from "tailwindcss";

// helpers for @tailwindcss/typography styles
// see: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
/** @type {(num: number) => string} */
const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");

/** @type {(px: number) => string} */
// const rem = (px) => `${round(px / 16)}rem`

/** @type {(px: number, base: number) => string} */
const em = (px: number, base: number) => `${round(px / base)}em`;

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
        gray: {
          500: "#4B5563",
          400: "#e5e7eb",
          300: "#98BEC6",
        },
        "navy-400": "rgb(139 159 200)",
        "navy-600": "rgb(34 75 164)",
        "light-brown": "#E3E5FF",
        "brown-800": "rgb(9 50 139)",
        "brown-600": "rgb(227, 229, 255)",
        "brown-900": "rgb(233, 223, 238)",
        "green-100": "#F8FAFE",
        "green-200": "#EEF4FD",
        "green-500": "#E9FBFE",
        "dark-blue": "#09328b",
        "text-blue": "#224ba4",
        "green-10": "#E9FBFE",
      },
      fontFamily: {
        lato: ["lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      // unfortunately @tailwindcss/typeography doesn't ship types
      /** @ts-ignore */
      typography: ({ theme }) => ({
        // docs: https://tailwindcss.com/docs/typography-plugin#customizing-the-css
        // code: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
        DEFAULT: {
          css: {
            h1: {
              fontSize: em(54, 16),
              marginTop: "0",
              marginBottom: em(48, 54),
              lineHeight: round(67.5 / 54),
              textTransform: "uppercase",
            },
            h2: {
              fontSize: em(36, 16),
              marginTop: em(64, 36),
              marginBottom: em(36, 36),
              lineHeight: round(48 / 36),
            },
            "h2:first-child": {
              marginTop: 0,
            },
            h3: {
              fontSize: em(20, 16),
              marginTop: em(32, 20),
              marginBottom: em(12, 20),
              lineHeight: round(32 / 20),
            },
            "h3:first-child": {
              marginTop: 0,
            },
          },
        },
      }),
      primary: "#082B76",
      secondary: "#F8FAFE",
    },
  },

  plugins: [],
};

export default config;
