import { createContext, useContext, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { getCookie, setCookie } from "../../cookie";

const langs = [
  "en", // "English"
  "es", // "Spanish"
  "id", // "Indonesian"
  "ja", // "Japanese"
  "ko", // "Korean"
  "ms", // "Malay"
  "nl", // "Dutch"
  "pt", // "Portuguese"
  "zh", // "Chinese"
];

/**
 * 1st preference: `genwealth.locale` from `localStorage`
 *
 * 2nd preference: `navigator.language`
 *
 * Fallback: `en`
 *
 * @returns ISO 639-1 two-letter language code
 */
export function getLocale() {
  return (
    getCookie()?.locale ||
    langs.find((lang) => {
      return navigator.language.startsWith(lang);
    }) ||
    "en"
  );
}
export function setLocale(locale: string) {
  setCookie({ locale });
}

const LanguageContext = createContext<
  [
    string, // locale
    (
      // to change language:
      language: string,
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

  useEffect(() => document.documentElement.setAttribute("lang", currLang), [currLang]);

  const updateLanguage = (
    locale: string,
    callback?: () => void, // onFulfilled
    onError?: (error: any) => void // onRejected
  ) => {
    fetch(`https://gen-wealth.github.io/public/lang/${locale}.json`, { cache: "no-cache" })
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
