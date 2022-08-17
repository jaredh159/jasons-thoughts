/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: [`Inter`],
        'reem-kufi': [`Reem Kufi`],
        lato: [`lato`],
      },
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
};
