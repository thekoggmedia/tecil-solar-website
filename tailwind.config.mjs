/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#CC1417',
          redDark: '#A30F11',
          orange: '#E8601A',
          gold: '#C8960C',
          teal: '#006D77',
        },
        ui: {
          bg: '#FFFFFF',
          off: '#F7F8FA',
          cream: '#FFF8F4',
          teal: '#EDF7F8',
          text: '#111827',
          muted: '#4B5563',
        },
        dark: {
          1: '#0F1117',
          2: '#1A1D23',
          3: '#242A33',
        },
      },
      fontFamily: {
        display: ['Big Shoulders Display', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 16px rgba(0,0,0,0.08)',
        card: '0 16px 40px rgba(0,0,0,0.10)',
        red: '0 8px 30px rgba(204,20,23,0.25)',
      },
    },
  },
  plugins: [],
};