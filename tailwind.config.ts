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

        "navy-400": "rgb(139 159 200)",

        "light-green": "#E9FBFE",

        "dark-blue": "#09328b"
      }
    },
  },
  plugins: [],
};
export default config;
