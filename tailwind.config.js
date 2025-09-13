/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '28': '7rem',
        '32': '8rem',
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0096ff',
          600: '#0082e6',
          700: '#006bb3',
          900: '#003d66',
        },
        secondary: {
          500: '#00d4ff',
          600: '#00b8e6',
        },
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
        academic: ['Computer Modern', 'Latin Modern Roman', 'Times New Roman', 'Times', 'serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite alternate',
        'float-robot': 'floatRobot 12s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)',
            opacity: '0.2'
          },
          '25%': { 
            transform: 'translate3d(30px, -20px, 20px) rotateX(5deg) rotateY(15deg)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translate3d(0, -40px, 40px) rotateX(10deg) rotateY(0deg)',
            opacity: '0.4'
          },
          '75%': { 
            transform: 'translate3d(-30px, -20px, 20px) rotateX(5deg) rotateY(-15deg)',
            opacity: '0.3'
          },
        },
        floatRobot: {
          '0%, 100%': { 
            transform: 'translate3d(0, 0, 0) rotateX(0deg) rotateZ(0deg)',
            opacity: '0.2'
          },
          '20%': { 
            transform: 'translate3d(20px, -15px, 15px) rotateX(3deg) rotateZ(2deg)',
            opacity: '0.3'
          },
          '40%': { 
            transform: 'translate3d(0, -30px, 30px) rotateX(5deg) rotateZ(0deg)',
            opacity: '0.4'
          },
          '60%': { 
            transform: 'translate3d(-20px, -15px, 15px) rotateX(3deg) rotateZ(-2deg)',
            opacity: '0.3'
          },
          '80%': { 
            transform: 'translate3d(10px, -5px, 10px) rotateX(2deg) rotateZ(1deg)',
            opacity: '0.25'
          },
        },
      }
    },
  },
  plugins: [],
}