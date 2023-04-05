/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#865DFF',
        'blue': '#191825',
        'pink': '#E384FF',
        'light-pink': '#FFA3FD',
      },
    },
  },
  plugins: [],
}

