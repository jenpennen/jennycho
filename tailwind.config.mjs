/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", //Enable dark mode using a class on the html or body element
  theme: {
    extend: {
      colors: {
        lightBg: "#F7F4F2",
        darkBg: "#161214",
        lightText: "#1d1d1a",
        darkText: "#F7F4F2",
        darkSecondaryBg: "#a7333f",
        lightSecondaryBg: "#f8f8ff55",
        lightPrimary: "#a7333f",
        darkPrimary: "#e5b3fe",
        accentOverlay: "#c0d4fd",
        lightOutline: "#161214",
        darkOutline: "#E1D65A",
        lightHeading: "#352208",
        darkHeading: "#BA9678",
      },
      fontFamily: {
        body: ["Roboto Mono", "system-ui", "sans-serif"],
        brand: ['"Xanh Mono"', '"Poppins"', "system-ui", "serif"],
        system: ["DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: "0.875rem",
        sm: "1rem",
        base: "1.35rem",
        md: "1.5rem",
        lg: "1.75rem",
        xl: "2rem",
        "2xl": "2.25rem",
        "3xl": "2.625rem",
        "4xl": "3.5rem",
        "5xl": "4.5rem",
      },
      boxShadow: {
        small: "0px 0px 5px #0e2f3924, 0px 10px 20px #0e2f3924",
        medium: "0px 5px 20px -5px #0e2f3924",
        large:
          "0px 5px 15px #0e2f3924, 0px 10px 25px #0e2f3924, 0px 20px 50px #0e2f3924",
      },
      transitionTimingFunction: {
        bouncy: "cubic-bezier(0.5, 1.5, 0.5, 0.7)",
      },
      transitionDuration: {
        slower: "1000ms",
        slow: "500ms",
        fast: "250ms",
      },
    },
    screens: {
      // mobile
      xs: "350px",
      //tablet
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      //laptop
      md: "1024px",
      // => @media (min-width: 1024px) { ... }
      //desktop
      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
