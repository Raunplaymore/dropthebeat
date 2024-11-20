/** @type {import('tailwindcss').Config} */

const toPixel = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    /**
     * 미디어쿼리 breakpoint
     * ~ 767px: mobile (기본)
     * 768px ~: tablet
     * 1024px ~: laptop
     * 1440px ~: pc
     */
    screens: {
      mobile: { max: '767px' },
      tablet: { min: '768px', max: '1023px' },
      laptop: { min: '1024px', max: '1439px' },
      pc: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        tablet: '69px',
        laptop: '36px',
        pc: '72px',
      },
    },
    colors: {
      black: '#1a1a1a',
      white: '#ffffff',
      gray: {
        100: '#fafafa',
        200: '#f1f1f1',
        300: '#ededed',
        400: '#d4d4d4',
        500: '#b3b3b3',
        600: '#9b9b9b',
        700: '#6c6c6c',
        800: '#373737',
      },
    },
    fontWeight: {
      100: '100',
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
    },
    fontFamily: {
      fontBig: [
        'Apple SD',
        'Gothic Neo',
        'Malgun Gothic',
        '맑은 고딕',
        'sans-serif',
      ],
      fontSmall: [
        'Apple SD',
        'Gothic Neo',
        'Malgun Gothic',
        '맑은 고딕',
        'sans-serif',
      ],
    },
    fontSize: {
      '2xs': '12px',
      xs: '13px',
      sm: '14px',
      base: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '30px',
      '5xl': '32px',
      '6xl': '36px',
      '7xl': '46px',
    },
    extend: {
      margin: toPixel,
      padding: toPixel,
      width: toPixel,
      height: toPixel,
      gap: toPixel,
      fontSize: toPixel,
      lineHeight: toPixel,
    },
  },
  plugins: [],
};