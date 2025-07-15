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
      xxl:'1580px',
    },
    container: {
      center: true  
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
       
        },
        secondary: "#e64a2e",
        tertiary: 'darkGreen',
        background:'#244d4d',
        lightGreen:"#244d4d",
        darkGreen:"#244d4d",
        darkGray:"#10242b",
        quaternary: '#FFBF1C',
        quinary: '#F6FAFE',
        borderColor:'#E9E9E9',
        bodyColor:'#FFBF1C',
        text: {
          DEFAULT: "black",
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
