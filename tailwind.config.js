/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors : {
      'primary' : '#000000' ,
      'secondary' : '#F1F1F1' ,
      "gray" : '#AAAAAA',
      "light" : '#FFFFFF' ,
      "sky" : '#0284c7' ,
      "neutral" : "#1A202C"
      // #606060
    },
    fontSize: {
      sm: '0.8rem',
      lg: '15px',
      base: '1rem',
      xl: '16px',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}

// text-[#606060]