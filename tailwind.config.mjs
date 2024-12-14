/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-color': {
          50: '#888888',
          100: '#717171',
          200: '#595959',
          300: '#424242',
          400: '#2b2b2b',
          500: '#1c1c1c',
          600: '#151515',
          700: '#0e0e0e',
          800: '#070707',
          900: '#000000',
        }
      },
    },
  },
  plugins: [],
};
