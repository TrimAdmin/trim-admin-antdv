/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,jsx,tsx}', './index.html'],
  theme: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'class',
  corePlugins: {
    preflight: false
  }
}
