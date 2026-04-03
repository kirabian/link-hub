/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'brand-black': '#080808',
        'brand-cyan': '#00FFFF',
        'brand-border': '#1F1F1F',
        'brand-grey': '#A1A1AA', // Dimmed grey for [ SOFTWARE ENGINEERING AGENCY ]
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
