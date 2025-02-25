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
      xs: '0.75rem',
      sm: '0.9375rem',
      base: '1.125rem',
      lg: '1.25rem',
      xl: '1.75rem',
      '2xl': '1.875rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
      '5xl': '3.75rem',
      '6xl': '4.5rem',
      '7xl': '6rem',
      '8xl': '8rem',
      '9xl': '9rem',
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        blue: {
          900: '#343c6a',
        },
        red: {
          500: '#FF4B4A',
        },
        emerald: {
          400: '#41D4A8',
        },
        gray: {
          400: '#b1b1b1',
        },
        zinc: {
          700: '#232323',
        },
        slate: {
          400: '#778dbb',
        },
      },
    },
  },
  plugins: [],
}
