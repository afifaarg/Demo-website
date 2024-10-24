/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5800', // Main color
          light: '#FF7733',   // Lighter shade of orange
          dark: '#E64A00',    // Darker shade of orange
        },
        white: '#FFFFFF',     // White color
        neutral: {
          100: '#F5F5F5',     // Very light grey (background)
          200: '#E0E0E0',     // Light grey (borders)
          400: '#B0B0B0',     // Medium grey (text)
          600: '#707070',     // Dark grey (text)
        },
        accent: {
          blue: '#007BFF',    // Blue accent for buttons/links
          green: '#28A745',   // Green for success states
          red: '#DC3545',     // Red for error states
        },
      },
    },
  },
  plugins: [],
}
