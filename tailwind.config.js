/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        brutal: "5px 5px 0px 0px #000",
        brutalPressed: "1px 2px 0px 0px #000",
      },
      colors: {
        myYellow: "#FFCC33",
        myYellowLight: "#ffedbf",
        myGreen: "#6D9022",
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
  plugins: [require("@tailwindcss/forms")],
};
