import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkerNavy: "#222833",
    lighterNavy: "#28303F",
    lightBlue: "#2092E9",
    themeBlue: "#1b5299",
    FadedBlue: "#CDD4DF",

    // font colors
    lightGray: "#999",
    richBlack: "#101319",
    almostBlack: "rgb(110, 112, 118)",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
