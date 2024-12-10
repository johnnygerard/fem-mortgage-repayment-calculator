import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      lime: "#D8DB2F",
      "lime-tint": "#ECED97",
      red: "#D73328",
      "slate-100": "#E4F4FD",
      "slate-300": "#9ABED5",
      "slate-500": "#6B94A8",
      "slate-700": "#4E6E7E",
      "slate-900": "#133041",
      white: "#FFFFFF",
    },
    extend: {
      transitionProperty: {
        bg: "background-color",
        color: "color",
      },
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      "preset-1": [
        "3.5rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-1px",
          fontWeight: 700,
        },
      ],
      "preset-1-mb": [
        "2.5rem",
        {
          lineHeight: "normal",
          letterSpacing: "-1px",
          fontWeight: 700,
        },
      ],
      "preset-2": [
        "1.5rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-1px",
          fontWeight: 700,
        },
      ],
      "preset-3": [
        "1.125rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-1px",
          fontWeight: 700,
        },
      ],
      "preset-4": [
        "1rem",
        {
          lineHeight: "1.5",
          letterSpacing: "0",
          fontWeight: 500,
        },
      ],
      "preset-5": [
        "0.875rem",
        {
          lineHeight: "1.5",
          letterSpacing: "0",
          fontWeight: 500,
        },
      ],
    },
    backgroundImage: {
      tint: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))",
    },
    screens: {
      tb: "48em", // Tablet
      dt: "90em", // Desktop
    },
    spacing: {
      0: "0",
      100: "0.5rem",
      150: "0.75rem",
      200: "1rem",
      300: "1.5rem",
      400: "2rem",
      500: "2.5rem",
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus-visible"]);
    }),
  ],
} satisfies Config;
