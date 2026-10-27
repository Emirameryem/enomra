/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FBF8F1',
          100: '#F6EEDD',
          200: '#EBDCB9',
          300: '#DEC48E',
          400: '#D2AC63',
          500: '#C59A3F', // Brand primary gold
          600: '#AC802E',
          700: '#8A6323',
          800: '#6A4A1C',
          900: '#4D3415',
        },
        slateDark: {
          950: '#0B0D11',
          900: '#11141B',
          850: '#161B24',
          800: '#1D2330',
          700: '#2A3346',
          600: '#3D4961',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.98)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
