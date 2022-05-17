import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/MainTheme";
import { Footer } from "./organisms/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <div>sofomo web</div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
