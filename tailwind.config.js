/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'hoverColor':'#f53838',
        'colorButton':'rgb(187, 38, 73)',
        'colorButtonHover':'rgb(224, 47, 89)',
        'textBlack': '#333',
        'cardAccesstextColor': '#0d0d30',
        'cardAccessHover': 'rgb(171,236,220)',
        'cardAccess': 'rgb(247,247,247)',
        'bg-footer':'#f8f8f8'
      },
      width:{
        '1440': '1440px'
      }
    },
  },
  plugins: [],
}

