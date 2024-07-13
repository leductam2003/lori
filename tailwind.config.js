/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./Components/**/*.{js,ts,jsx,tsx}",],

  theme: {
    extend: {
      backgroundImage: {
        'avenger': "url('/assets/bg.jpg')",
      },
      fontFamily: {
        speedy: ['SpeedyRegular'],
        avengeance: ['Avengeance'],
        starshield: ['StarshieldRegular'],
      },
    },
  },

  plugins: [],
}

