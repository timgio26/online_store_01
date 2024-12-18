/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F5EFFF',
          200: '#E5D9F2',
          300: '#CDC1FF',
          400: '#A294F9',
          500:'#6458ad'
        },
        accent: '#ffd06b'
      },
    },
  },
  plugins: [],
}

