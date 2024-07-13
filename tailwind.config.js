/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/**/*.{html,js}"],
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

