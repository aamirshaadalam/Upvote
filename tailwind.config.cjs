/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'selected-upvote': '#E5E8FD',
        'selected-arrow': '#253CF2',
        'not-selected-upvote': '#F4F6F8',
        'not-selected-arrow': '#343A40',
      },
    },
  },
  plugins: [],
};
