/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#F9FAFC",
        sidebarText: "#1C1D1D",
        primaryHover: "#EAEBED",
        primaryText: "#1F1F1F",
        secondaryText: "#1640D6",
        secondaryHover: "#E6EFFF",
        primaryBtn: "#3B65E3",
        primaryBorder: "#D9D9D9",
        primaryShadow: "#F4F7FB",
        hoverShadow: "#E9F1FA",
        progressPrimary: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
