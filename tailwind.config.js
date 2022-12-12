module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      brandBlue: '#3F7CDB',
      batchBlue: '#2A5392',
      batchBlue20: '#D9E5F8',
      brandBlue20: '#9FBEED',
      brandBlue80: '#5F92E1',
      brandBlue50: '#2A5392',
      brandBlue60: '#9FBDED',
      brandBlue40: '#D9E5F8',
      secondaryBlue: '#1E2254',
      secondaryBlue80: '#444771',
      sidebarBlue: '#090B1A',
      body: '#4A4A68',
      white: '#FFF',
      black: '#000',
      black25: '#BBB',
      white80: '#F9F9F9',
      grey: '#080917',
      grey80: '#333442',
      grey60: '#CECED2',
      grey40: '#84858D',
      grey30: '#85858E',
      grey20: '#8E90A9',
      grey10: '#73739B',
      btnHover: '#5A8EE3',
      success: '#4A878D',
      success80: '#6FCBD4',
      success20: '#E2F5F6',
      disabled: '#D2D2D3',
      danger: '#F15D5F',
      red: '#F3787A',
      warning: '#FFC107',
      status: {
        200: '#4A878D',
        400: '#141738',
        404: '#A13E3F',
        424: '#A13E3F',
        500: '#A13E3F',
      },
      statusBg: {
        200: '#E2F5F6',
        400: '#D2D3DD',
        404: '#FCDFDF',
        424: '#FCDFDF',
        500: '#FCDFDF',
      },
    },
    extend: {
      spacing: {
        22: '5.5rem',
      },
      keyframes: {
        visible: {
          '0%': {opacity: '0'},
          '100%': {opacity: '100'},
        },
      },
      animation: {
        dropdown: 'visible 300ms ease-out',
      },
    },
    fontFamily: {
      sans: ['Atakk', 'sans-serif'],
    },
    fontSize: {
      base: ['1rem', '24px'], // 16px

      lg: ['1.25rem', '28px'], // 20px

      sm: ['.8125rem', '18px'], // 13px

      small: ['.75rem', '17.38px'], // 12px

      tiny: '.875rem', // 14px

      xl: ['1.5625rem', '30px'], // 25px

      xs: ['.625rem', '12px'], // 10px

      xxl: '1.9375rem', // 31px

      xxxl: ['2.5rem', '48px'], // 40px
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
  },
};
