/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      

      'md': '768px',
     

      'lg': '1920px',    
    }
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mainBG': "url('/Image/main-Background.jpg')", 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        Baron:["var(--font-baron)"],
        Bebas:["var(--font-bebas_neue)"],
        Montserrat:["var(--font-montserrat)"],
        Cheesburga:["var(--font-CHEESEBURGA)"],
        Kumbh:["var(--font-Kumbh_Sans)"],
      }
    },
  },
  plugins: [],
};
