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
        "primary-brown-10": "rgb(238, 240, 255)",
        "light-brown": "#E3E5FF",
        "brown-800": "rgb(9 50 139)",
        "brown-600": "rgb(227, 229, 255)",

        "neutral-black": "#09328b",

        "text-blue": "#224ba4",

        "navy-400": "rgb(139 159 200)",
        "navy-600": "rgb(34 75 164)",
      }
    },
  },
  plugins: [],
};
export default config;
