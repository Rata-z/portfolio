import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { primary: "#ffff" },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "tl-br": {
          "0%": { "background-position": "25% 25%" },
          "50%": { "background-position": "85% 85%" },
          "100%": { "background-position": "25% 25%" },
        },
        bt: {
          "0%": { "background-position": "50% 10%" },
          "50%": { "background-position": "50% 60%" },
          "100%": { "background-position": "50% 10%" },
        },
      },
      animation: {
        "gradient-tl": "tl-br 5s ease-in-out infinite",
        "gradient-bt": "bt 5s ease-in-out infinite",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
