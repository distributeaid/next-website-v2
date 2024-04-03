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
        "light-brown": "#E3E5FF",
        "brown-800": "rgb(9 50 139)",

        "navy-400": "rgb(139 159 200)",
        "navy-600": "rgb(34 75 164)",

        "green-100": "#F8FAFE",
        "green-200": "#EEF4FD",
        "green-500": "#E9FBFE",

        "dark-blue": "#09328b",
        "text-blue": "#224ba4",
      }
    },
  },
  plugins: [],
};
export default config;
