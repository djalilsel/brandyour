/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FDEF6E",
      },
      borderColor: {
        "border-grey": "rgb(222, 222, 222)",
      },
      fontWeight: {
        "body-s": 600,
      },
      maxWidth: {
        "max-screen": "1440px",
      },
      fontSize: {
        "body-s": [
          "14px",
          {
            lineHeight: "145%",
            letterSpacing: "-.28px",
          },
        ],
        "body-m": [
          "16px",
          {
            lineHeight: "145%",
            letterSpacing: "-.35px",
          },
        ],
        "body-l": [
          "18px",
          {
            fontWeight: "600",
            lineHeight: "125%",
            letterSpacing: "-.18px",
          },
        ],
        "heading-l": [
          "40px",
          {
            fontWeight: 600,
            lineHeight: "110%",
            letterSpacing: "-1.2px",
          },
        ],
      },
      padding: {
        "spacing-xl": "40px",
        "spacing-m": "24px",
        "spacing-s": "16px",
        "spacing-xs": "8px",
      },
      margin: {
        "spacing-xl": "40px",
        "spacing-m": "24px",
        "spacing-s": "16px",
        "spacing-xs": "8px",
      },
      keyframes: {
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "spin-very-slow": "spinSlow 25s linear infinite",
        marquee: "marquee 45s linear infinite",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {
      fontSize: ["responsive"],
    },
  },
  plugins: [],
};
