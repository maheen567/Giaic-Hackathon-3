import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
 
  theme: {
    extend: {
      colors: {
        csBlack: '#0D0D0D',
        csYellow: '#FF9F0D',
        csGray: '#E0DFDF'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        curly: ['Dancing Script','sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

