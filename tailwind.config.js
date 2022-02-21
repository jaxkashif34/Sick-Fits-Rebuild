module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sick: "#ff0000",
        blacky: "#393939",
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
      skew: {
        "-5": "-5deg",
        "-7": "-7deg",
        "-20": "-20deg",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      borderWidth: {
        10: "10px",
      },
      transitionTimingFunction: {
        bloop: "cubic-bezier(1, -0.65, 0,2.31)",
      },
      maxWidth: {
        1000: "62.5rem",
      },
      boxShadow: {
        bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
      },
      spacing: {
        100: "25rem",
      },
    },
  },
  plugins: [],
};
