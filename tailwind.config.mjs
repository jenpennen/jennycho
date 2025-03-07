/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", //Enable dark mode using a class on the html or body element
  theme: {
    extend: {
      colors: {
        lightBg: "#f8f8ff",
        darkBg: "#1d1d1a",
        lightText: "#1d1d1a",
        darkText: "#ebf0ff",
        darkSecondaryBg: "#323234",
        lightSecondaryBg: "#f8f8ff55",
        lightPrimary: "#db2777",
        darkPrimary: "#85cbdb",
        accentOverlay: "#c0d4fd",
      },
      fontFamily: {
        body: ["Instrument Sans", "system-ui", "sans-serif"],
        brand: ['"DM Sans"', '"Poppins"', "system-ui", "serif"],
        system: ["Instrument Sans", "system-ui", "sans-serif"],
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
