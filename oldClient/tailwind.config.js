/** @type {import('tailwindcss').Config} */
module.exports = {
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
      theme: {
            extend: {
                  spacing: {
                        450: '375px',
                        650: '650px',
                        740: '760px',
                        950: '950px',
                  },
            },
      },
      plugins: [],
};
