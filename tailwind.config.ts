import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        marquee: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 90%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(calc(-100% + 16rem))" },
        },
      },
      animation: {
        marquee: "marquee 8s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
