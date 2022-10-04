/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
      
        xs: ['12px', '16px'],
        sm: ['14px', '18px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['32px', '40px'],
        '4xl': ['48px', '56px']
      },

      colors: {
        red: {
            300: '#BB2E57',
            500: '#AF053F',
            700: '#300219'           
          },
        black: '#0B0E16',
        white: '#F4F6FF',
        grey: {
            300: '#B1B4BD',
            500: '#91949D',
            700: '#696C74'
          }
        }
      }
    },
  plugins: [],
}
