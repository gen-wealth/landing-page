import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Error from "./pages/Error";
import "./styles/index.css";
import LanguageProvider, { getLocale } from "./contexts/language/LanguageProvider";
import ThemeProvider from "./contexts/theme/ThemeProvider";

function renderApp(app: JSX.Element) {
  return ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode>{app}</React.StrictMode>);
}

const locale = getLocale();
fetch(`https://gen-wealth.github.io/public/lang/${locale}.json`)
  .then((language) => {
    language
      .json()
      .then((messages) => {
        renderApp(
          <LanguageProvider defaultLocale={locale} defaultMessages={messages}>
            <ThemeProvider>
              <Home />
            </ThemeProvider>
          </LanguageProvider>
        );
      })
      .catch((x) => renderApp(<Error message={`${x}`} />));
  })
  .catch((x) => renderApp(<Error message={`${x}`} />));
