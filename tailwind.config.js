/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors: {
        'slate-700': 'rgba(55, 65, 81, 0.7)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}