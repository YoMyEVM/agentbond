import forms from '@tailwindcss/forms';

export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [forms], // Updated to use the import
  theme: {
    extend: {
      colors: {
        accent1: '#01fcfc', // Accent color 1 (Cyan)
        accent2: '#fd01f5', // Accent color 2 (Pink)
      },
    },
  },
};
