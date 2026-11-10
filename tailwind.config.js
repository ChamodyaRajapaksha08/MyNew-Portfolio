/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Preflight is off because src/index.css ships its own reset and component styles.
  corePlugins: { preflight: false },
  theme: { extend: {} },
  plugins: [],
};
