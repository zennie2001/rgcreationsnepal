import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',  // You can change the size as per your needs
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
       
        },
        secondary: "#092A49",
        tertiary: '#EF001F',
        quaternary: '#FFBF1C',
        quinary: '#F6FAFE',
        borderColor:'#E9E9E9',
        bodyColor:'#F5FBFF',
        text: {
          DEFAULT: "#4B4B4B",
        },
      },

      fontFamily: {
        sans: 'var(--font-sans)',
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },

      boxShadow: {
        custom: `0px 0px 8px 0px rgba(2, 19, 79, 0.08)`,

      },
    },
  },
  plugins: [],
};
export default config;
