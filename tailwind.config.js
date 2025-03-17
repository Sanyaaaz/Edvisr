/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E2E",  // Deep AI Blue
        accent: "#7F00FF",   // Neon Purple
      },
    },
  },
  plugins: [],
};
