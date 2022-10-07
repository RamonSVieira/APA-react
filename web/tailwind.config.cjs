/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-green": "#004723",
        button: "#f76e11",
        "button-hover": "#df4646",
        bgContact: "#2dbb73",
      },
      textColor: {
        "text-p": "#404040",
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
        gridFormulario: "5fr 7fr",
       conquests: "56px auto",
      },
      maxHeight: {
        sectionHeader: "calc(100vh - 100px)"
      },

        
     

    },
  },

  plugins: [],
};
