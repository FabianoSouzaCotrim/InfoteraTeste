import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: '#0080FF',
        text: '#00264D',
        caption: '#698096',
        gray: '#BFCCD9',
        lightGray: '#E3EBF3',
        white: '#FFFFFF',
        overlay: 'rgba(18, 57, 82, 0.95)',
        yellow: '#F2BF09',
        red: '#FF0000',
      },
    },
  },
  plugins: [],
};

export default config;
