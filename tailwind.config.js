/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out',
        slideOut: 'slideOut 0.5s ease-in-out',
      },
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        next: '#000',
        react: '#61DBFB',
        html: '#e34c26',
        css: '#264de4',
        tailwind: '#0ea529',
        sanity: '#f36458',
        node: '#3C873A',
        express: '#000000',
        mongo: '#00ed64',
        typescript: '#3178c6',
        javascript: '#F0DB4F',
        firebase: '#FFA611',
        postcss: '#DD3A0A',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(next|react|html|css|tailwind|sanity|node|express|mongo|typescript|javascript|firebase|postcss)/,
    },
  ],
};
