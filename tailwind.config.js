/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'glowing-green': '#d4f938',
        'custom-black': '#010101',
      },
    },
  },
  plugins: [
    // ... other plugins
    require('tailwindcss-gradients'),
  ],
};
