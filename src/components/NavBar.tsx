import { useIntl } from "react-intl";
import { getLocale, scrollToElement, scrollToTop, setLocale } from "../util";
import ThemeController from "./ThemeController";

type menu = {
  linkId: string;
  linkName: string;
};

type lang = {
  name: string;
  code: string;
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

function NavBar() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "genWealth" });

  const menus: menu[] = [
    {
      linkId: "our-service",
      linkName: intl.formatMessage({ id: "navBar.menu1" }),
    },
    {
      linkId: "roadmap",
      linkName: intl.formatMessage({ id: "navBar.menu2" }),
    },
    {
      linkId: "about-us",
      linkName: intl.formatMessage({ id: "navBar.menu3" }),
    },
    {
      linkId: "contact-us",
      linkName: intl.formatMessage({ id: "navBar.menu4" }),
    },
  ];

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
  const locale = getLocale();

  return (
    <div className="fixed w-full max-w-screen-xl h-min mx-auto inset-0 z-10">
      <div className="flex justify-between navbar shadow-xl bg-base-content bg-opacity-50 backdrop-blur rounded-box m-2 w-auto">
        <div>
          {/* GenWealth logo */}
          <a
            // href="#"
            onClick={scrollToTop}
            className="flex gap-2 h-12"
          >
            <div className="btn btn-ghost btn-circle hover:bg-opacity-0">
              <img alt={title} src="/GenWealth.ico" className="mask mask-squircle" />
            </div>
            <span className="text-purple-950 xl:text-3xl lg:text-2xl md:text-xl max-sm:text-lg font-bold self-center max-md:hidden max-sm:flex">{title}</span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-2" />

        <div className="gap-4">
          <div className="join gap-4 max-sm:hidden">
            {/* Menu */}
            {menus.map((menu) => (
              <a
                key={menu.linkName}
                // href={menu.linkURL}
                onClick={(e) => scrollToElement(e, menu.linkId)}
                className="link link-hover text-center place-self-center join-item style-link"
              >
                {menu.linkName}
              </a>
            ))}

            {/* Mood */}
            <ThemeController
              className="mb-1"
              sun={{
                w: 22,
                h: 22,
                className: "fill-purple-950",
              }}
              moon={{
                w: 22,
                h: 22,
                className: "fill-purple-950",
              }}
            />
          </div>

          {/* Launch App button */}
          <a href="https://preview.genwealth.app" className="button-primary">
            {intl.formatMessage({ id: "navBar.action1" })}
          </a>

          {/* Language dropdown */}
          <div className="dropdown dropdown-hover -ml-2">
            <div tabIndex={0} role="button" className="p-2 style-text-shadow">
              {flag[locale]}
            </div>
            <ul tabIndex={0} className="dropdown-content flex flex-col gap-2 p-2 z-20 top-0 shadow-xl drop-shadow-xl bg-base-content bg-opacity-75 rounded-box">
              <li>
                <a className="style-text-shadow">{flag[locale]}</a>
              </li>
              {langs
                .sort((l, r) => (l.name < r.name ? -1 : 1))
                .filter((lang) => lang.code !== locale)
                .map((lang) => (
                  <li key={lang.code}>
                    <a
                      className="style-text-shadow tooltip tooltip-left before:bg-indigo-950 before:text-base-content"
                      data-tip={lang.name}
                      onClick={() => {
                        setLocale(lang.code);
                        location.reload();
                      }}
                    >
                      {flag[lang.code]}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
