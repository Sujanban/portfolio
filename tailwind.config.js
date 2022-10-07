/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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