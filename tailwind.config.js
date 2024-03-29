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
        map_pattern: "url('/public/map.svg)",
      },
      boxShadow: {
        brutalSmall: "4px 4px 0px 0px #000",
        brutal: "5px 5px 0px 0px #000",
        brutalXl: "8px 8px 0px 0px #000",
        brutalPressed: "1px 2px 0px 0px #000",
        upperBlue: "-5px -5px 0px 0px #07B6D4",
        upperYellow: "-5px -5px 0px 0px #FFCC33",
      },
      dropShadow: {
        hero: "8px 4px 0 #000",
        heroz: "-2px -2px 0 #000",
      },
      colors: {
        myYellow: "#FFCC33",
        myYellowLight: "#ffedbf",
        myGreen: "#495F16",
        gianluGreen: "#85EDAA",
      },
      fontFamily: {
        worksans: ["var(--font-worksans)"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};
