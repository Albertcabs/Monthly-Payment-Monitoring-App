/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/*.tsx'],
   theme: {
      extend: {},
   },
   plugins: [
      require('@tailwindcss/container-queries'),
      require('@tailwindcss/forms'),
   ],
};
