/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          oldStandard: ['var(--font-old-standard)', 'serif'],
        },
        colors: {
          background: 'rgb(var(--background) / <alpha-value>)',
          foreground: 'rgb(var(--foreground) / <alpha-value>)',
        },
        keyframes: {
          fadeOut: {
            '0%': { opacity: 1, visibility: 'visible' },
            '100%': { opacity: 0, visibility: 'hidden' },
          },
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
        animation: {
          fadeOut: 'fadeOut 0.5s ease-out forwards',
          fadeIn: 'fadeIn 0.5s ease-out forwards',
        },
        fontSize: {
          '10xl': '10rem',
          '11xl': '11rem',
        },
      },
    },
    plugins: [],
  }