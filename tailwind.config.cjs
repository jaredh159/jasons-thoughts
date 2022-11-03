/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xs: `500px`,
      sm: `640px`,
      md: `768px`,
      lg: `1024px`,
      'lg+': `1152px`,
      xl: `1280px`,
      '2xl': `1600px`,
    },
    extend: {
      fontFamily: {
        inter: [`Inter`],
        'reem-kufi': [`Reem Kufi`],
        lato: [`lato`],
      },
      spacing: {
        112: `28rem`,
        128: `32rem`,
        152: `38rem`,
        176: `44rem`,
      },
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
};
