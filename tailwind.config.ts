import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      lime: "#D8DB2F",
      red: "#D73328",
      slate: {
        100: "#E4F4FD",
        300: "#9ABED5",
        500: "#6B94A8",
        700: "#4E6E7E",
        900: "#133041",
      },
      white: "#FFFFFF",
    },
    spacing: {
      100: "0.5rem",
      150: "0.75rem",
      200: "1rem",
      300: "1.5rem",
      400: "2rem",
      500: "2.5rem",
    },
  },
  plugins: [],
} satisfies Config;
