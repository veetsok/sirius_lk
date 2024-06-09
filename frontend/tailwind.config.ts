// tailwind.config.js
import type { Config } from "tailwindcss";
import colorsTW from "./src/styles/lib/tailwind.colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/user.InterfaceLayer/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
        xl: { max: "1280px" }, // => @media (max-width: 1279px) { ... }
        lg: { max: "1024px" }, // => @media (max-width: 1023px) { ... }
        md: { max: "768px" }, // => @media (max-width: 767px) { ... }
        sm: { max: "640px" }, // => @media (max-width: 639px) { ... }
      },
      container: {
        center: true,
        screens: {
          xl: "1390px",
        },
      },
      fontSize: {
        h1: "32px",
        h2: "24px",
        h3: "20px",
        h4: "16px",
        h5: "12px",
        h6: "10px",
      },
      boxShadow: {
        custom:
          "0 2px 4px 0 rgba(143, 143, 183, 0.07), 0 7px 7px 0 rgba(143, 143, 183, 0.06), 0 15px 9px 0 rgba(143, 143, 183, 0.04), 0 27px 11px 0 rgba(143, 143, 183, 0.01), 0 42px 12px 0 rgba(143, 143, 183, 0)",
      },
      colors: colorsTW,
    },
  },
  plugins: [],
};
export default config;
