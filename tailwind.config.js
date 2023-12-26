module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#012528",
        background: "#e6fcfe",
        primary: "#f9311f",
        secondary: "#fde3be",
        accent: "#ea0665",
      },
      fontFamily: {}, // Define your preferred fonts here
    },
    breakpoints: {
      xs: "426px",
      sm: "640px",
      md: "767px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
