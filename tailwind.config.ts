import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#07484A",
          light: "#70908B",
        },
        secondary: {
          DEFAULT: "#70908B",
          dark: "#07484A",
        },
        accent: {
          1: "#CAF3E5",
          2: "#E0EFF6",
          3: "#EEEBFF",
          4: "#FFF4E7",
          5: "#FDFBF8",
        },
        background: "#FDFBF8",
        foreground: "#07484A",
        card: {
          DEFAULT: "#FDFBF8",
          foreground: "#07484A",
        },
        popover: {
          DEFAULT: "#FDFBF8",
          foreground: "#07484A",
        },
        muted: {
          DEFAULT: "#70908B",
          foreground: "#07484A",
        },
        border: "#70908B",
        input: "#70908B",
        ring: "#07484A",
        destructive: "#ef4444",
        chart: {
          "1": "#CAF3E5",
          "2": "#E0EFF6",
          "3": "#EEEBFF",
          "4": "#FFF4E7",
          "5": "#FDFBF8",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'roboto': ["var(--font-roboto-flex)"],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
      },
      fontSize: {
        '55': '55rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
