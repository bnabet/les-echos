/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        background: {
          light: "#FFFFFF",
          dark: "#2D2D2D",
        },
        primary: {
          light: "#DB0006",
          DEFAULT: "#B00005",
          dark: "#94080C",
        },
        secondary: {
          light: "#FCF9C5",
          DEFAULT: "#FAEC70",
          dark: "#F8E04C",
        },
        accent: "#F4A261",
        surface: {
          light: "#F4F4F4",
          dark: "#343434",
        },
        text: {
          primary: {
            light: "#212121",
            dark: "#ECECEC",
          },
          secondary: {
            light: "#5d5d5d",
            dark: "#b0b0b0",
          },
        },
      },
      borderRadius: {
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
};

// Les Echos/Primary: #B00005
// Abonnement/Jaune: #FAEC70
// Neutral/Micro contrast: #F4F4F4
// Neutral/High contrast: #212121
