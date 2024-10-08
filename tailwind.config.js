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

      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [            
            '0px 330px 190px rgba(0, 0, 0, .9)'
        ]
      },
      backgroundImage: {
        'linksBG': "url('/Image/Frame-36.png')", 
        'guardian': "url('/Image/Alabay-Games/Guard-gradient.png')", 
        'heritage': "url('/Image/Alabay-Games/heritage-gradient.png')", 
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
        Helvetica:["var(--font-helvetica)"],
      }
    },
  },
  plugins: [],
};
