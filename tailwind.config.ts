import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
        'ibm': ['IBM Plex Mono', 'monospace'],
        'mont': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
             },
      boxShadow: {
        '3xl': '0px 10px 50px 0px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
export default config;
