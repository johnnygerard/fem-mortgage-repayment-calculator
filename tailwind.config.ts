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
    fontFamily: {
      sans: ["var(--font-plus-jakarta-sans)"],
    },
    fontSize: {
      "preset-1": [
        "3.5rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-1px",
          fontWeight: "700",
        },
      ],
      "preset-2": [
        "1.5rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-1px",
          fontWeight: "700",
        },
      ],
      "preset-3": [
        "1.125rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-1px",
          fontWeight: "700",
        },
      ],
      "preset-4": [
        "1rem",
        {
          lineHeight: "1.5",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      "preset-5": [
        "0.875rem",
        {
          lineHeight: "1.5",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
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
