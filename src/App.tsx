import React from "react";
import GlobalStyles from "./themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/MainTheme";
import { ContactFormContext, NavItemStateContext, PageOverlayContext } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageTemplate } from "./templates/PageTemplate";
import { ROUTE } from "./routes";
import { AndroidPage, HomePage, OutsourcePage } from "./pages";

function App() {
  return (
    <ContactFormContext>
      <NavItemStateContext>
        <PageOverlayContext>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <GlobalStyles />
              <PageTemplate>
                <Routes>
                  <Route path={ROUTE.HOME_PAGE} element={<HomePage />} />
                  <Route path={ROUTE.OUTSOURCE} element={<OutsourcePage />} />
                  <Route path={ROUTE.ANDROID} element={<AndroidPage />} />
                </Routes>
              </PageTemplate>
            </BrowserRouter>
          </ThemeProvider>
        </PageOverlayContext>
      </NavItemStateContext>
    </ContactFormContext>
  );
}

export default App;
