module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Gowun Batang"', "serif"],
        body: ['"Nanum Gothic"', "sans-serif"],
      },
      colors: {
        primary: "#845EC2",
        secondary: "#D65DB1",
        accent: "#FF9671",
        bg: "#2C2C54",
        surface: "#4B4453",
        text: "#F8F8F8",
      },
    },
  },
};
