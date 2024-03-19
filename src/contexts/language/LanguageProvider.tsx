import { createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";

export type Lang =
  | "en" // "English"
  | "es" // "Spanish"
  | "id" // "Indonesian"
  | "ja" // "Japanese"
  | "ko" // "Korean"
  | "ms" // "Malay"
  | "nl" // "Dutch"
  | "pt" // "Portuguese"
  | "zh"; // "Chinese"

export function getLocale() {
  return (localStorage.getItem("genwealth.locale") || "en") as Lang;
}
export function setLocale(locale: string) {
  localStorage.setItem("genwealth.locale", locale);
}

const LanguageContext = createContext<
  [
    string, // locale
    (
      // to change language:
      language: Lang,
      callback?: () => void, // on_language_changed()
      onError?: (error: any) => void // on_exception!
    ) => void
  ]
>(["", setLocale]);
export const useLanguage = () => useContext(LanguageContext);

function LanguageProvider(props: {
  defaultLocale: string; // en
  defaultMessages: Record<string, string>;
  children: JSX.Element;
}) {
  const [currLang, setCurrLang] = useState(props.defaultLocale);
  const [messages, setMessages] = useState(props.defaultMessages);

  const updateLanguage = (
    locale: Lang,
    callback?: () => void, // onFulfilled
    onError?: (error: any) => void // onRejected
  ) => {
    fetch(`/lang/${locale}.json`)
      .then((lang) => {
        lang
          .json()
          .then((messages) => {
            setLocale(locale);
            setCurrLang(locale);
            setMessages(messages);
            if (callback) callback();
          })
          .catch((x) => {
            if (onError) onError(x);
          });
      })
      .catch((x) => {
        if (onError) onError(x);
      });
  };

  return (
    <LanguageContext.Provider value={[currLang, updateLanguage]}>
      <IntlProvider locale={currLang} messages={messages}>
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
