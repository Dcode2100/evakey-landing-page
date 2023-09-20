// Next.js Configuration
module.exports = {
  // Define the content to be processed
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Define the theme with extended colors
  theme: {
    extend: {
      colors: {
        text: "#012528",      // Text color
        background: "#e6fcfe", // Background color
        primary: "#f9311f",    // Primary color
        secondary: "#fde3be",  // Secondary color
        accent: "#ea0665",     // Accent color
      },
      // Define your preferred fonts here
      fontFamily: {},
    },
  },
  // Add any plugins you want to use
  plugins: [],
  // Define breakpoints for responsive design
  breakpoints: {
    "xs": "426px",   // Extra small screens
    "sm": "640px",   // Small screens
    "md": "767px",   // Medium screens
    "lg": "1024px",  // Large screens
    "xl": "1280px",  // Extra-large screens
  },
  // Add max-width media screen
  media: {
    'max-width': {
      // Define the max-width breakpoint and styles
      'xs': '426px',
      'sm': '640px',
      'md': '767px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
};
