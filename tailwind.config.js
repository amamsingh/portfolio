/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        navy: {
          900: '#020c1b', // Deepest
          800: '#0a192f', // Cards
          700: '#112240', // Hover
        },
        violet: {
          900: '#1a0b2e',
          800: '#2d1b4e',
          700: '#432c7a',
          500: '#764ba2',
          300: '#b8a6dc',
        },
        neon: {
          purple: '#b000ff',
          pink: '#ff00cc',
          cyan: '#00ffff',
          blue: '#2cb67d',
        },
        slate: {
          light: '#e6f1ff',
          DEFAULT: '#a8b2d1',
          dark: '#495670',
        },
        green: {
          DEFAULT: '#64ffda', // Keeping for legacy support momentarily
          tint: 'rgba(100, 255, 218, 0.1)',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #b000ff, 0 0 20px #b000ff' },
          'to': { boxShadow: '0 0 20px #ff00cc, 0 0 30px #ff00cc' },
        }
      }
    },
  },
  plugins: [],
}
