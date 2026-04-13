/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: 'var(--bg)',
        card: 'var(--card)',
        heading: 'var(--heading)',
        faded: 'var(--faded)',
        brand: 'var(--accent)',
        'brand-hover': 'var(--accent-hover)',
        line: 'var(--line)',
        'line-hover': 'var(--line-hover)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
