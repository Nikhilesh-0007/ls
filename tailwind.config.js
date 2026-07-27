/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0A1F44',
            dark: '#06132C',
            light: '#133063',
            surface: '#102A56',
          },
          blue: {
            DEFAULT: '#2E6FD9',
            hover: '#1E5BC2',
            light: '#EBF2FE',
            glow: '#5891F0',
          },
          silver: {
            DEFAULT: '#8A93A3',
            light: '#E2E6EC',
            muted: '#616977',
            bg: '#F3F5F8',
          },
          bg: '#FAFBFC',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 10px rgba(10, 31, 68, 0.04)',
        'soft-md': '0 8px 30px rgba(10, 31, 68, 0.06)',
        'soft-lg': '0 16px 45px rgba(10, 31, 68, 0.09)',
        'glow-blue': '0 0 25px rgba(46, 111, 217, 0.25)',
      },
    },
  },
  plugins: [],
}
