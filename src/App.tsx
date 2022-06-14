import React from "react";
import GlobalStyles from "./themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/MainTheme";
import { ContactFormContext } from "./context";

function App() {
  return (
    <ContactFormContext>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>Sofomo web</div>
      </ThemeProvider>
    </ContactFormContext>
  );
}

export default App;
