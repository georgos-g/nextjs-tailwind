/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Adding smaller breakpoint
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },

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
        montserratMiddle: ['Montserrat Middle', 'sans-serif'],
        montserratBold: ['Montserrat Bold', 'sans-serif'],
        montserratBlack: ['Montserrat Black', 'sans-serif'],
      },
      colors: {
        nav_header_footer: ' #FFFFF0',
      },
      // transition-opacity
      transitionProperty: {
        opacity: 'opacity_gg',
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.8, 0, 0.2, 1)',
        transitionDuration: '500ms',
        transitionDelay: '0ms',
      },
    },
  },
  // add daisyUI plugin
  plugins: [require('daisyui')],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
