/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Space Mono', 'sans-serif'],
    },
    fontSize: {
      xs: '13px',
      sm: '15px',
      base: '16px',
      lg: '22px',
      '2xl': '26px',

    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    colors: {
      'white': '#ffffff',
      'primary': '#0079ff',
      'secondary': '#697C9A',
      'dark': '#2b3442',
      'light': {
        100: '#F6F8FF',
        200: '#FEFEFE'
      },

      // 'danger': 'tomato',
      // 'light': '#f5f5f5',
      // 'white': '#fff',
      // 'dark': '#0A0A0A',
      // 'black': '#000'
    },

    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '6': '24px',
      '8': '32px',
      '9': '36px',
      '12': '48px',
      '16': '64px',
      '18': '72px',
      '20': "84px",
      '24': '96px',
      '32': '128px',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
    },
    extend: {
      height: {
        '128': '32rem',
        '12': '48px',

      },
      lineHeight: {
        'loose': '2.5px',
        '12': '3rem',
      },
      boxShadow: {
        'base': '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)',
      }
    },
  },
  plugins: [],
}
