import { useIntl } from "react-intl";
import { useTheme } from "../contexts/theme/ThemeProvider";
import { scrollToElement } from "../util";
import LanguageSelector from "../contexts/language/LanguageSelector";
import ThemeController from "../contexts/theme/ThemeController";
import FooterSideBar from "./FooterSideBar";

type menu = {
  linkId: string;
  linkName: string;
  subMenus: menu[];
};

function SideBar() {
  const intl = useIntl();
  const menus: menu[] = [
    {
      linkId: "our-service",
      linkName: intl.formatMessage({ id: "pageMap.menu1" }),
      subMenus: [
        {
          linkId: "how-it-works",
          linkName: intl.formatMessage({ id: "pageMap.menu1.sub1" }),
          subMenus: [],
        },
      ],
    },
    {
      linkId: "roadmap",
      linkName: intl.formatMessage({ id: "pageMap.menu2" }),
      subMenus: [],
    },
    {
      linkId: "about-us",
      linkName: intl.formatMessage({ id: "pageMap.menu3" }),
      subMenus: [
        {
          linkId: "team-members",
          linkName: intl.formatMessage({ id: "pageMap.menu3.sub1" }),
          subMenus: [],
        },
      ],
    },
    {
      linkId: "contact-us",
      linkName: intl.formatMessage({ id: "pageMap.menu4" }),
      subMenus: [],
    },
    {
      linkId: "call-to-action",
      linkName: intl.formatMessage({ id: "pageMap.menu5" }),
      subMenus: [],
    },
  ];

  const [theme, _] = useTheme();
  const mapMenu = (menu: menu, className?: string) => (
    <li key={menu.linkId}>
      <a
        // href={menu.linkURL}
        onClick={(e) => scrollToElement(e, menu.linkId)}
        className={`whitespace-break-spaces active:!bg-transparent
        ${theme === "moon" ? "" : "hover:text-primary-focus active:!text-primary-focus"}
        ${className}`}
      >
        {menu.linkName}
      </a>
      <ul>
        {menu.subMenus.map((menu) => {
          return mapMenu(menu);
        })}
      </ul>
    </li>
  );

  return (
    <aside
      className={`sticky inset-0 z-10
      ${theme === "sun" ? "text-primary" : "text-primary-content"}
      w-[calc(.5*(100%-1280px)+8px)] h-0
      top-[4.5rem] max-[1792px]:hidden`}
    >
      <div className="flex flex-col h-[calc(100vh-4.5rem)]">
        <div className="w-full mx-auto shrink overflow-x-hidden style-mask-y-sm">
          <ul className="menu w-fit m-auto">
            {menus.map((menu) => {
              return mapMenu(menu, "font-bold");
            })}
          </ul>
        </div>

        <div className="divider w-16 mt-0 pt-0 mx-auto" />

        <div className="flex justify-center overflow-x-clip shrink-0">
          <div className="join join-vertical gap-px">
            <a
              href="https://preview.genwealth.app"
              className={`join-item
              ${theme === "sun" ? "button-primary" : "button-secondary"}`}
            >
              {intl.formatMessage({ id: "sideBar.actionPrimary" })}
            </a>
            <a
              href="https://docs.genwealth.app"
              className={`join-item
              ${theme === "moon" ? "button-outline" : "button-outline-dark"}`}
            >
              {intl.formatMessage({ id: "sideBar.actionSecondary" })}
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-px my-4 join">
          <LanguageSelector
            dropdownClassName="btn-circle btn-secondary btn-sm
            bg-base-content bg-opacity-[calc(5/6)] hover:bg-base-content
            join-item shadow-xl"
            buttonClassName="px-2 py-1.5"
            contentClassName="bg-base-content rounded-tr-none gap-2 pl-2 pr-[7px] py-1.5 top-0"
            tooltipClassName="tooltip-right"
          />
          <ThemeController
            className="btn-circle btn-secondary btn-sm
            bg-base-content bg-opacity-[calc(5/6)] hover:bg-base-content
            join-item shadow-xl"
            sun={{
              w: 16,
              h: 16,
              className: "fill-primary",
            }}
            moon={{
              w: 16,
              h: 16,
              className: "fill-primary",
            }}
          />
        </div>

        <div className="grow px-2">
          <div className="aspect-video">
            {/* <a
              href="https://nike.com"
              target="_blank"
              className="flex rounded-box size-full
              bg-[url('/ContainerImg.jpg')] bg-cover"
            >
              <div
                className={`hero-overlay
              ${
                theme === "moon"
                  ? "bg-opacity-25 hover:bg-opacity-15" // dark
                  : "bg-opacity-10 hover:bg-opacity-5" // light
              }
              rounded-box transition-all duration-300 flex`}
              >
                <div
                  className="bg-base-content bg-opacity-75
                size-fit rounded-tl-box rounded-br-box"
                >
                  <span
                    className="text-white text-[.5vw] mix-blend-difference
                  font-bold mx-2 capitalize"
                  >
                    {intl.formatMessage({ id: "ad" })}
                  </span>
                </div>
              </div>
            </a> */}
          </div>
        </div>

        <div className="m-4">
          <FooterSideBar />
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
