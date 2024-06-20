/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'age': '#EF4444',
        'gender': '#F97316',
        'physical': '#FEB019',
        'race': '#14B8A6',
        'religion': '#2563EB',
        'other': '#4B5563',
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-.+/,
    }
  ]
}

