/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg_home: "url('/img/hero_bg.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        openSansLight: ['Open Sans 300', 'sans-serif'],
        openSansRegular: ['Open Sans Regular', 'sans-serif'],
        openSansBold: ['Open Sans Bold', 'sans-serif'],
        openSansSemi: ['Open Sans 400', 'sans-serif'],

        montserratThin: ['Montserrat Thin', 'sans-serif'],
        montserratLight: ['Montserrat Light', 'sans-serif'],
        montserratRegular: ['Montserrat Regular', 'sans-serif'],
        montserratBold: ['Montserrat Bold', 'sans-serif'],
        montserratBlack: ['Montserrat Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
