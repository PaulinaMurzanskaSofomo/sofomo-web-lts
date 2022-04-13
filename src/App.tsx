import React from "react";
import GlobalStyles from "./themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/MainTheme";
import { Footer } from "./organisms/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>sofomo web</div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
