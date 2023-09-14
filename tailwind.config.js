module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#012528",      // Text color
        background: "#e6fcfe", // Background color
        primary: "#f9311f",    // Primary color
        secondary: "#fde3be",  // Secondary color
        accent: "#ea0665",     // Accent color
      },
      fontFamily: {}, // Define your preferred fonts here
    },
  },
  plugins: [], // Add any plugins you want to use
  breakpoints: {
    // Define your breakpoints here
    xs: "426px",   // extra small
    sm: "640px",   // Small screens
    md: "767px",   // Medium screens
    lg: "1024px",  // Large screens
    xl: "1280px",  // Extra-large screens
  },
};
