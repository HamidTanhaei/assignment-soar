/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1440px",
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      base: '18px',
    },
    extend: {
      colors: {
        blue: {
          900: '#343c6a',
        },
        gray: {
          400: '#b1b1b1',
        },
        zinc: {
          700: '#232323',
        },
      },
    },
  },
  plugins: [],
}
