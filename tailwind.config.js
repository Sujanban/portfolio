/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-hover' : 'rgba(212, 252, 243,0.2)',
        'bgmain' : '#0a192f',
        'bgcard' : '#112240',
        'colorprimary' : '#ccd6f6',
        'colorsecondary' : '#8892b0',
        'neon' : '#64ffda'
      },
    },
  },
  plugins: [],
}