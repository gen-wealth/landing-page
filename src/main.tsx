import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Error from "./pages/Error";
import "./styles/index.css";
import LanguageProvider, { getLocale } from "./contexts/language/LanguageProvider";
import ThemeProvider from "./contexts/theme/ThemeProvider";
import ToastProvider from "./contexts/toast/ToastProvider";

function renderApp(app: JSX.Element) {
  return ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ToastProvider>{app}</ToastProvider>
    </React.StrictMode>
  );
}

localStorage.clear();

const locale = getLocale();
fetch(`https://gen-wealth.github.io/public/lang/${locale}.json`, { cache: "no-cache" })
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
      .catch((langToJsonError) => {
        console.log({ langToJsonError });
        renderApp(<Error message={`${langToJsonError.message ?? langToJsonError}`} />);
      });
  })
  .catch((fetchLangJsonError) => {
    console.log({ fetchLangJsonError });
    renderApp(<Error message={`${fetchLangJsonError.message ?? fetchLangJsonError}`} />);
  });
