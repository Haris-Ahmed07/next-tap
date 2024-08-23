export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
      paprika: ["Paprika"],
      playwrite: ["Playwrite BE VLG"],
    },
    container: {
      padding: {
        DEFAULT: "0.5rem",
      },
    },
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1064px",
      xl: "1280px",
      xxl: "1450px",
    },
    extend: {
      colors: {
        light: "#FCFCFC",
        dark: "black",
        blue: "#8CBDEF",
        darkBlue: "#0069C0",
        yellowColor: "#FF9416",
      },
      textSize: {
        extraSmall: "12px",
        small: "15px",
        medium: "18px",
        large: "20px",
        extraLarge: "22px",
      },
      backgroundImage: {
        banner1: 'url("/src/assets/banner1.svg")',
        banner2: 'url("/src/assets/banner2.svg")',
        banner3: 'url("/src/assets/banner3.svg")',
        banner2cards: 'url("/src/assets/banner2-cards.svg")',
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
      },
    },
  },
  plugins: [],
};
