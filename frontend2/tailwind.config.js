/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      perspective: {
        1000: '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        bgPrimaryColor: "#1c2137",
        bgSecondaryColor: "#212147",
        primaryColor: '#4dd5ff',
        primaryColorHover: '#6ccdf5'
      }
    },
  },
  plugins: [],
}

