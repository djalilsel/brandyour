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

      fontWeight: {
        "body-s": 400,
      },

      fontSize: {
        "body-s": [
          "15px",
          {
            lineHeight: "145%",
            letterSpacing: "-.28px",
          },
        ],
      },
      padding: {
        "spacing-xl": "40px",
        "spacing-s": "16px",
        "spacing-xs": "8px",
      },
    },
  },
  variants: {
    extend: {
      fontSize: ["responsive"],
    },
  },
  plugins: [],
};
