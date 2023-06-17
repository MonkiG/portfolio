/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        metallic: 'metallic 2s linear ifinite'
      },
      keyframes: {
        metallic: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' }
        }
      }
    }
  },
  plugins: []
}
