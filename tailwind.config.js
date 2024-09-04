/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1570EF',
        secondary: '#E9E9E9',
        danger: '#ef4444',
        success: '#51C671',
        disable: '#858D9D',
      },
      fontFamily: {
        // montserrat: ['Montserrat', 'sans-serif'],
        // sarabun: ['Sarabun', 'sans-serif'],
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
}
