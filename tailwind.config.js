/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        mammoth: ["8rem", { lineHeight: "1rem" }],
      },
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#88883",
        },
      },
      fontFamily: {
        body: ['Nunito']
      },
    },
  },
  plugins: [],
};
