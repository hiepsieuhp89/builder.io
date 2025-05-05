/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(16 7 0)",
        secondary: "rgb(243 213 201)",
        tertiary: "rgb(59 22 0)",
        "black-100": "rgb(65 34 20)",
        "black-200": "rgb(50 15 0)",
        "white-100": "#f3f3f3",
        "dropdown": {
          "bg": "rgb(25 10 0)",
          "hover": "rgb(45 20 5)"
        },
        "lang-switcher": {
          "border": "rgba(243, 213, 201, 0.3)",
          "active": "rgb(70 30 10)",
          "text": "rgb(243 213 201)",
          "text-dim": "rgba(243, 213, 201, 0.8)"
        }
      },
      boxShadow: {
        card: "0px 35px 120px -15px #35211e",
        dropdown: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.4)"
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
