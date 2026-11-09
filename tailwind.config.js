/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F6F2",
        line: "#EAE7E1",
        ink: "#202020",
        mute: "#77736F",
        accent: "#B88C83",
        night: "#242321",
        navy: {
          DEFAULT: "#253551",
          text: "#F8F8F7",
          secondary: "#E0E0DB",
          accent: "#AEBBD0",
          divider: "rgba(248, 248, 247, 0.25)",
        },
      },
      fontFamily: {
        display: ["'DM Sans'", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
