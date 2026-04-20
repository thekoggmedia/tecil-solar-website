/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: '#CC1417', dark: '#A30F11' },
        orange: { DEFAULT: '#E8601A', light: '#F07040' },
        gold: '#C8960C',
        teal: '#006D77',
        dark: { DEFAULT: '#111111', 2: '#1A1A1A', 3: '#222222' },
        cream: '#FFF0E6',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
