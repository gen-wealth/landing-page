module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0px)" },
          "20%, 60%": { transform: "translateX(6px)" },
          "40%, 80%": { transform: "translateX(-6px)" },
        },
      },
      animation: {
        wiggle: "wiggle 500ms linear",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave"],
    darkTheme: "synthwave",
  },
};
