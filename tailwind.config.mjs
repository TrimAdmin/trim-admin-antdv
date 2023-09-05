/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,jsx,tsx}', './index.html'],
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'
        ]
      }
    }
  },
}
