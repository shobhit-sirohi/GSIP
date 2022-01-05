module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      50: "50%",
      60: "60%",
      70: "70%",
      80: "80%",
      90: "90%",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      screens: {
        "3xl": "2000px",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero1: "url('src/images/h1.png')",
        hero2: "url('src/images/h2.png')",
        dots: "url('src/images/dots.png')",
        hero3: "url('src/images/hero3.png')",
        hero5: "url('src/images/hero5.png')",
        hero3sm: "url('src/images/hero3sm.png')",
        world: "url('src/images/world.png')",
        dotty: "url('src/images/dotty.png')",
        sittinggirl: "url('src/images/GirlSitting.png')",
        line: "url('src/images/line.png')",
        gsl: "url('src/images/gsl.png')",
        earth: "url('src/images/earth.png')",
        whiteworld: "url('src/images/whiteworld.svg')",
      },
      colors: {
        newblue: "#023047",
        newyellow: "#F2AF00",
        newgray: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
