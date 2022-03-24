import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/MainTheme";
import MenuTop from "./views/menuTop/MenuTop";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MenuTop />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
