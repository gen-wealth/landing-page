import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./styles/index.css";
import LanguageProvider, { getLocale } from "./contexts/language/LanguageProvider";
import ThemeProvider from "./contexts/theme/ThemeProvider";

const locale = getLocale();
fetch(`/lang/${locale}.json`).then((lang) => {
  lang.json().then((messages) => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <LanguageProvider defaultLocale={locale} defaultMessages={messages}>
          <ThemeProvider>
            <Home />
          </ThemeProvider>
        </LanguageProvider>
      </React.StrictMode>
    );
  });
});
