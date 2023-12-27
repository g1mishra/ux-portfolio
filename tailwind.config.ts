import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "rgba(18, 18, 18, 1)",
        blue: "rgba(0, 203, 255, 1)",
        grey: "rgba(150, 150, 150, 1)",
        mbeige: "rgba(230, 225, 213, 1)",
        mbrown: "rgba(95, 78, 59, 1)",
        mlightbeige: "rgba(240, 239, 233, 1)",
        mred: "rgba(209, 33, 49, 1)",
        purple: "rgba(163, 119, 255, 1)",
        red: "rgba(255, 41, 92, 1)",
        white: "rgba(255, 255, 255, 1)",
        yellow: "rgba(255, 190, 40, 1)",
        gray: {
          "100": "#101010",
          "200": "rgba(255, 255, 255, 0.6)",
        },
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "rgba(242, 242, 242, 0.2)",
          "300": "rgba(242, 242, 242, 0.1)",
          "400": "rgba(242, 242, 242, 0.04)",
          "500": "rgba(242, 242, 242, 0.15)",
          "600": "rgba(242, 242, 242, 0.6)",
        },
        dimgray: "#646464",
        plum: {
          "100": "#ccaeff",
          "200": "#9e85c8",
        },
        darkslategray: "#303030",
        blueviolet: "#864bff",
      },
      borderColor: {
        c242: "rgba(242, 242, 242, 0.04)",
        c16: "rgba(16, 16, 16, 0.25)",
      },
      backgroundColor: {
        c242: "rgba(242, 242, 242, 0.05)",
      },
      spacing: {},
      fontFamily: {
        karla: "Karla",
        inter: "Inter",
        inherit: "inherit",
      },
      borderRadius: {
        "13xl": "32px",
        xl: "20px",
        "21xl": "40px",
      },
    },
  },
  plugins: [],
};
export default config;
