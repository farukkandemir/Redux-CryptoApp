{
  import("tailwindcss").Config;
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0b132b",
        lightGray: "#efefef",
      },
    },
  },
  plugins: [],
};
