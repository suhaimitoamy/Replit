/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--bg-dark)',
        darker: 'var(--bg-darker)',
        neon: 'var(--color-neon)',
        'neon-dim': 'var(--color-neon-dim)',
        'neon-glow': 'var(--color-neon-glow)',
        danger: 'var(--color-danger)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
