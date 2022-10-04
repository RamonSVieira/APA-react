/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-green": "#004723",
        button: "#f76e11",
        "button-hover": "#df4646",
      },
      transitionProperty: {
        width: "width",
      },
      rotate: {
        43: "43deg",
      },
      fontFamily: {
        primary: ["Roboto"],
      },
      gridTemplateColumns: {
       gridFormulario: "gridTemplateColumns 5fr 7fr"
      }
    },
  },
  plugins: [],
};
