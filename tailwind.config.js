/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ['10px', '14px'],
        tiny: ['13px', '15.6px'],
      },
      colors: {
        'backgroud-footer': '#fbfbfb',
      },

  
    },
    screens: {
      '2xs': '200px',
      // => @media (min-width: 200px) { ... }

      'xs': '380px',
      // => @media (min-width: 380cpx) { ... }

      'sssm': '400px',
      // => @media (min-width: 640px) { ... }

      'ssm': '500px',
      // => @media (min-width: 500px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
