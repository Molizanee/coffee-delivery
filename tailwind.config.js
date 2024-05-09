/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          white: '#FFFFFF',
          background: '#FAFAFA',
          card: '#F3F2F2',
          input: '#EDEDED',
          button: '#E6E5E5',
          hover: '#D7D5D5',
          label: '#8D8686',
          text: '#574F4D',
          subTitle: '#403937',
          title: '#272221',
        },
        brand: {
          yellowWhite: '#F1E9C9',
          yellow: '#DBAC2C',
          yellowDark: '#C47F17',
          purpleLight: '#EBE5F9',
          purple: '#8047F8',
          purpleDark: '#4B2995',
        },
      },
      fontSize: {
        regularL: '1.25rem',
        regularM: '1.0rem',
        regularS: '0.875rem',
      },
      fontFamily: {
        regular: ['Roboto', 'sans-serif'],
        bold: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
