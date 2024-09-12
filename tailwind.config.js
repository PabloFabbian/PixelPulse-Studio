/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors: {
        'slate-700': 'rgba(55, 65, 81, 0.6)',
      },
      screens: {
        'xs': '480px', // Para dispositivos móviles pequeños
        'sm': '834px', // Para tablets
        'md': '1440px', // Para laptops
        'lg': '2560px', // Para pantallas grandes
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}