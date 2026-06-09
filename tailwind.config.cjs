/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
      },
      animation: {
        blob: 'blob 9s ease-in-out infinite',
        'blob-delay': 'blob 9s ease-in-out 3s infinite',
        'blob-delay2': 'blob 9s ease-in-out 6s infinite',
        float: 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        particle: 'particle 10s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.07)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.93)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        particle: {
          '0%':   { transform: 'translateY(100vh)',                      opacity: '0'   },
          '10%':  {                                                        opacity: '1'   },
          '90%':  {                                                        opacity: '0.6' },
          '100%': { transform: 'translateY(-120px) translateX(30px)',    opacity: '0'   },
        },
      },
    },
  },
  plugins: [],
}
