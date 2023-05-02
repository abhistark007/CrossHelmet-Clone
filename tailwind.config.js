/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FiraSans: ["Fira Sans", "sans-serif"],
        Mavis: ["MAVIS", "cursive"],
       },
       colors: {
        'light-black':'#262A32',
        'full-black':'#010101',
        'light-white':'#F3F3F3',
        'full-white':'#FFFFFF',
      },
      backgroundImage:{
        'bgCover2':"url('./src/assets/10008.jpg)"
      },
      
    },
  },
  plugins: [],
};
