import { useIntl } from "react-intl";
import { useLanguage } from "./LanguageProvider";

type lang = {
  name: string;
  code: string;
};

type locale = {
  localName: string;
  localFlag: JSX.Element;
};
const info: Record<string, locale> = {
  en: { localName: "English (US)", localFlag: <>🇺🇸</> },
  es: { localName: "Español", localFlag: <>🇪🇸</> },
  fr: { localName: "Français", localFlag: <>🇫🇷</> },
  id: { localName: "Indonesia", localFlag: <>🇮🇩</> },
  ja: { localName: "日本語", localFlag: <>🇯🇵</> },
  ko: { localName: "한국어", localFlag: <>🇰🇷</> },
  ms: { localName: "Melayu", localFlag: <>🇲🇾</> },
  // nl: { localName: "Nederlands", localFlag: <>🇳🇱</> },
  pt: { localName: "Português", localFlag: <>🇵🇹</> },
  ru: { localName: "Русский", localFlag: <>🇷🇺</> },
  zh: { localName: "中文", localFlag: <>🇨🇳</> },
};

function LanguageSelector(props: {
  dropdownClassName?: string;
  buttonClassName?: string;
  contentClassName?: string; // ul
  tooltipClassName?: string; // li
  onLanguageChanged?: () => void; // callback
  onError?: (error: any) => void; // error callback
}) {
  const intl = useIntl();

  const langs: lang[] = [
    { name: intl.formatMessage({ id: "lang.en" }), code: "en" },
    { name: intl.formatMessage({ id: "lang.es" }), code: "es" },
    { name: intl.formatMessage({ id: "lang.fr" }), code: "fr" },
    { name: intl.formatMessage({ id: "lang.id" }), code: "id" },
    { name: intl.formatMessage({ id: "lang.ja" }), code: "ja" },
    { name: intl.formatMessage({ id: "lang.ko" }), code: "ko" },
    { name: intl.formatMessage({ id: "lang.ms" }), code: "ms" },
    // { name: intl.formatMessage({ id: "lang.nl" }), code: "nl" },
    { name: intl.formatMessage({ id: "lang.pt" }), code: "pt" },
    { name: intl.formatMessage({ id: "lang.ru" }), code: "ru" },
    { name: intl.formatMessage({ id: "lang.zh" }), code: "zh" },
  ];
  const [language, setLanguage] = useLanguage();

  return (
    <div className={`dropdown dropdown-hover text-primary text-center ${props.dropdownClassName}`}>
      <div role="button" className={`style-text-shadow ${props.buttonClassName}`}>
        {info[language].localFlag}
      </div>
      <ul
        className={`dropdown-content rounded-box
        flex flex-col shadow-xl drop-shadow-xl
        ${props.contentClassName}`}
        tabIndex={0}
      >
        <li tabIndex={0}>
          <a className="style-text-shadow">{info[language].localFlag}</a>
        </li>
        {langs
          .sort((l, r) => (info[l.code].localName < info[r.code].localName ? -1 : 1))
          .filter((lang) => lang.code !== language)
          .map((lang) => (
            <li key={lang.code} tabIndex={0}>
              <a
                className={`style-text-shadow
                before:bg-info before:text-info-content
                tooltip ${props.tooltipClassName}`}
                data-tip={`${info[lang.code].localName} | ${lang.name}`}
                onClick={() => {
                  setLanguage(lang.code, props.onLanguageChanged, props.onError);
                }}
              >
                {info[lang.code].localFlag}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default LanguageSelector;
