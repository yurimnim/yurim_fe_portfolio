// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' if you want to respect system settings
  theme: {
    extend: {
      // You can add custom colors, fonts, etc. here
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... other shades
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}