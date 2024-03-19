import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./styles/index.css";
import { getLocale } from "./util.ts";
import ThemeProvider from "./components/ThemeProvider.tsx";
import { IntlProvider } from "react-intl";

const locale = getLocale();
fetch(`/lang/${locale}.json`).then((lang) => {
  lang.json().then((messages) => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <IntlProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <Home />
          </ThemeProvider>
        </IntlProvider>
      </React.StrictMode>
    );
  });
});
