/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "chefAtHome-Orange-50": "#fffaec",
        "chefAtHome-Orange-100": "#fff3d3",
        "chefAtHome-Orange-200": "#ffe4a5",
        "chefAtHome-Orange-300": "#ffce6d",
        "chefAtHome-Orange-400": "#ffae32",
        "chefAtHome-Orange-500": "#ff930a",
        "chefAtHome-Orange-600": "#ff7b00",
        "chefAtHome-Orange-700": "#cc5902",
        "chefAtHome-Orange-800": "#a1450b",
        "chefAtHome-Orange-900": "#823b0c",
        "chefAtHome-Orange-950": "#461b04",
        "chefAtHome-Beige-50": "#F7F3EF",
      },
    },
  },
};
