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
        twinkle: 'twinkle 4s ease-in-out infinite',
        'twinkle-slow': 'twinkleSlow 6s ease-in-out infinite',
        shooting: 'shootingStar 7s linear infinite',
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
        twinkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.2)' },
          '50%':       { opacity: '1', transform: 'scale(1)'   },
        },
        twinkleSlow: {
          '0%, 100%': { opacity: '0.05' },
          '40%, 60%': { opacity: '0.75' },
        },
        shootingStar: {
          '0%':   { transform: 'translateX(0) translateY(0) scaleX(1)',   opacity: '1' },
          '100%': { transform: 'translateX(-300px) translateY(300px) scaleX(8)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
