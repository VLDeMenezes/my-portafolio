import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Puedes cambiar a 'media' o 'class'
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        basicBg: "#e5e5e5",
        basicFont: "#000000",
        basicDarkBg: "#14213d",
        basicDarkFont: "#ffffff",
        detailColor: "#fca311",
        hoverColor: "",
      },
    },
  },
  plugins: [],
};

export default config;
