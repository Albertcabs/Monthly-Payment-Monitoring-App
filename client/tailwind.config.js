/** @type {import('tailwindcss').Config} */
module.exports = {
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
      theme: {
            extend: {
                  spacing: {
                        100: '400px',
                        120: '420px',
                        190: '550px',
                        860: '860px',
                        960: '960px',
                  },
                  screens: {
                        lg: '992px',
                        // => @media (min-width: 992px) { ... }
                  },
            },
      },
      plugins: [],
};
