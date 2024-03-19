import { useIntl } from "react-intl";
import { Lang, useLanguage } from "./LanguageProvider";

type lang = {
  name: string;
  code: Lang;
};

const flag: Record<string, JSX.Element> = {
  en: <>&#127482;&#127480;</>, // 🇺🇸
  es: <>&#127466;&#127480;</>, // 🇪🇸
  id: <>&#127470;&#127465;</>, // 🇮🇩
  ja: <>&#127471;&#127477;</>, // 🇯🇵
  ko: <>&#127472;&#127479;</>, // 🇰🇷
  ms: <>&#127474;&#127486;</>, // 🇲🇾
  nl: <>&#127475;&#127473;</>, // 🇳🇱
  pt: <>&#127477;&#127481;</>, // 🇵🇹
  zh: <>&#127464;&#127475;</>, // 🇨🇳
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
    {
      name: intl.formatMessage({ id: "lang.en" }),
      code: "en",
    },
    {
      name: intl.formatMessage({ id: "lang.es" }),
      code: "es",
    },
    {
      name: intl.formatMessage({ id: "lang.id" }),
      code: "id",
    },
    {
      name: intl.formatMessage({ id: "lang.ja" }),
      code: "ja",
    },
    {
      name: intl.formatMessage({ id: "lang.ko" }),
      code: "ko",
    },
    {
      name: intl.formatMessage({ id: "lang.ms" }),
      code: "ms",
    },
    {
      name: intl.formatMessage({ id: "lang.nl" }),
      code: "nl",
    },
    {
      name: intl.formatMessage({ id: "lang.pt" }),
      code: "pt",
    },
    {
      name: intl.formatMessage({ id: "lang.zh" }),
      code: "zh",
    },
  ];
  const [language, setLanguage] = useLanguage();

  return (
    <div className={`dropdown dropdown-hover ${props.dropdownClassName}`}>
      <div tabIndex={0} role="button" className={`style-text-shadow ${props.buttonClassName}`}>
        {flag[language]}
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content rounded-box
        flex flex-col shadow-xl drop-shadow-xl
        ${props.contentClassName}`}
      >
        <li>
          <a className="style-text-shadow">{flag[language]}</a>
        </li>
        {langs
          .sort((l, r) => (l.name < r.name ? -1 : 1))
          .filter((lang) => lang.code !== language)
          .map((lang) => (
            <li key={lang.code}>
              <a
                className={`style-text-shadow
                before:bg-info before:text-info-content
                tooltip ${props.tooltipClassName}`}
                data-tip={lang.name}
                onClick={() => {
                  setLanguage(lang.code, props.onLanguageChanged, props.onError);
                }}
              >
                {flag[lang.code]}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default LanguageSelector;
