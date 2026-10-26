/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#F4F6EE',
          100: '#E7ECDA',
          200: '#D0DDB8',
          300: '#B1C58F',
          400: '#8DA664',
          500: '#68753D', // Primary signature olive
          600: '#535F2F',
          700: '#414C24',
          800: '#333C1E',
          900: '#2A311A',
        },
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'pulse-slow': 'pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};