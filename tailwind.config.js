/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      accent: 'var(--accent-color)',
     bgcolor:`var(--background-color)` ,
     textColor:`var(--text-color)` ,
     mutedColor:`var(--muted-color)` ,
     successColor:`var(--success-color)` ,
     shadowColor:`var(--shadow-color)` ,
  
    },
  },
  plugins: [],
}
