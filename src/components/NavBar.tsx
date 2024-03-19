import { useIntl } from "react-intl";
import { scrollToElement, scrollToTop } from "../util";
import ThemeController from "../contexts/theme/ThemeController";
import LanguageSelector from "../contexts/language/LanguageSelector";

type menu = {
  linkId: string;
  linkName: string;
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

  return (
    <div className="fixed w-full max-w-screen-xl h-min mx-auto inset-0 z-10">
      <div className="flex justify-between navbar shadow-xl bg-base-content bg-opacity-[calc(2/3)] backdrop-blur-sm rounded-box m-2 w-auto">
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
            <span className="text-primary xl:text-3xl lg:text-2xl md:text-xl max-sm:text-lg font-bold self-center max-md:hidden max-sm:flex">{title}</span>
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
              className="mb-px"
              sun={{
                w: 23,
                h: 23,
                className: "fill-primary",
              }}
              moon={{
                w: 23,
                h: 23,
                className: "fill-primary",
              }}
            />
          </div>

          {/* Launch App button */}
          <a href="https://preview.genwealth.app" className="button-primary">
            {intl.formatMessage({ id: "navBar.action1" })}
          </a>

          {/* Language dropdown */}
          <LanguageSelector
            dropdownClassName="-ml-2"
            buttonClassName="p-2"
            contentClassName="bg-base-content bg-opacity-[calc(5/6)] gap-2 p-2 top-0"
            tooltipClassName="tooltip-left 2xl:tooltip-right"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
