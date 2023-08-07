const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
      },
      fontFamily: {
        base: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains_mono)"],
      },
      boxShadow: {
        center: "0 0 24px 0 rgba(0,0,0, 0.05)",
        "center-lg": "0 0 24px 0 rgba(0,0,0, 0.1)",
        avatar: "0 0 15px 0 rgba(0,0,0, 0.50)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in-out": {
          "0%": { opacity: 0 },
          "20%, 70%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "bg-pos-x": {
          "0%": {
            "background-size": "400% 400%",
            "background-position": "0% 0%",
          },
          "100%": {
            "background-size": "400% 400%",
            "background-position": "80% 0%",
          },
        },
      },
      animation: {
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "fade-in-out":
          "fade-in-out 0.5s cubic-bezier(.13,.74,.84,.43) 1 forwards",
        "gradient-x": "gradient-x 5s linear infinite",
        "gradient-y": "gradient-y 5s linear infinite",
        "gradient-xy": "gradient-xy 5s linear infinite",
        "bg-pos-x": "bg-pos-x 200s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    }),
  ],
};
