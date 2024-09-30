import { konstructColorsPlugin } from './lib/plugins';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
  plugins: [konstructColorsPlugin],
};
