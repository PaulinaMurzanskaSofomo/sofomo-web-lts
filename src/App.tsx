import React from "react";
import GlobalStyles from "./themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/MainTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>sofomo web</div>
    </ThemeProvider>
  );
}

export default App;
