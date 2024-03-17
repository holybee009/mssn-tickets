module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue_gray: { 100: "#d9d9d9" },
        green: { 200: "#9be49b", 300: "#6bdc76", 700: "#1d9a38", 800: "#1f932a", A100: "#c2f8c2" },
        indigo: { 900: "#242f6c" },
        black: { 900: "#000000", "900_cc": "#040303cc" },
        cyan_400: "#36dcd1",
      },
      boxShadow: {
        xs: "0px 0px  4px 8px #c8eaf5",
        sm: "0px 10px  8px 10px #c2f8c2",
        md: "0px 0px  4px 7px #c2f8c2",
        lg: "0px 10px  8px 10px #0000003f",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #02d8cb,#1d9a38)",
        gradient1: "linear-gradient(180deg, #6bdc76,#1f932a)",
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
