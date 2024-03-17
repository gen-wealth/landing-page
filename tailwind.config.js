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
    themes: [
      // "synthwave",
      {
        moon: {
          primary: "#3b0764",
          secondary: "#1e1b4b",
          accent: "#f9c3ff",
          neutral: "#180733",
          "base-100": "#1a103d",
          info: "#10a9fe",
          success: "#a9fe10",
          warning: "#fea910",
          error: "#fe3210",
        },
      },
    ],
    darkTheme: "moon", // "synthwave",
  },
};
