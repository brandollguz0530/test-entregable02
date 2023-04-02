/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "lato": ["lato", "sans-serif"]
      },gridTemplateColumns: {
        "two": "auto auto"
      }

    },
  },
  plugins: [],
}

