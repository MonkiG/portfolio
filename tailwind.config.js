/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'start-fade-in': 'start .3s ease-in-out',
        'end-fade-out': 'end .3s ease-in-out',
        'slide-left': 'slideLeft .3s ease-in-out',
        'slide-right': 'slideRight .3s ease-in-out'
      },
      keyframes: {
        start: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        end: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        slideLeft: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' }
        },
        slideRight: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' }
        }
      }
    }
  },
  plugins: []
}
