export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        accent1: '#01fcfc', // First accent color
        accent2: '#fd01f5', // Second accent color
      },
    },
  },
};
