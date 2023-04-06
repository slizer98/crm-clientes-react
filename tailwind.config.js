/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#77037B',
        'blue': '#210062',
        'yellow': '#F9E2AF',
        'light-blue': '#009FBD',
      },
    },
  },
  plugins: [],
}

