/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep charcoal backgrounds
        onyx: '#0c0c0c',
        'onyx-mid': '#111111',
        'onyx-card': '#161616',
        'onyx-border': '#1e1e1e',
        // Warm gold accents — the luxury signal
        gold: '#b8976a',
        'gold-light': '#d4af7a',
        'gold-pale': '#e8d5b0',
        'gold-dark': '#8a6f4e',
        // Neutrals
        'warm-white': '#f5f3ef',
        'warm-gray': '#9a9489',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
