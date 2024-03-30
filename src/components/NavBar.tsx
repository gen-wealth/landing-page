import { MouseEvent, useEffect, useReducer } from "react";
import { useIntl } from "react-intl";
import { scrollToElement, scrollToTop } from "../util";
import ThemeController from "../contexts/theme/ThemeController";
import LanguageSelector from "../contexts/language/LanguageSelector";
import Footer from "./Footer";

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

  type onShowHamburgerMenu =
    | false
    | {
        action: "toggle" | "scrollToTop" | "scrollToElement";
        e?: MouseEvent;
        args?: any[];
      };

  const [showHamburgerMenu, setShowHamburgerMenu] = useReducer(onSetShowHamburgerMenu, false);

  useEffect(() => {
    const hideHamburgerMenu = () => {
      // sm:hidden
      if (document.documentElement.clientWidth >= 640) {
        setShowHamburgerMenu(false);
      }
    };

    window.addEventListener("resize", hideHamburgerMenu);
    return () => window.removeEventListener("resize", hideHamburgerMenu);
  }, []);

  function onSetShowHamburgerMenu(currHamburgerMenu: boolean, showHamburgerMenu: onShowHamburgerMenu) {
    if (!showHamburgerMenu) {
      document.documentElement.style.overflow = "auto";
      return false;
    }

    switch (showHamburgerMenu.action) {
      case "toggle":
        document.documentElement.style.overflow = currHamburgerMenu ? "auto" : "hidden";
        return !currHamburgerMenu;

      case "scrollToTop":
        document.documentElement.style.overflow = "auto";
        scrollToTop(showHamburgerMenu.e!);
        return false;

      case "scrollToElement":
        document.documentElement.style.overflow = "auto";
        scrollToElement(showHamburgerMenu.e!, showHamburgerMenu.args![0]);
        return false;

      default:
        return currHamburgerMenu;
    }
  }

  function ThemeLanguage() {
    return (
      <>
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
        <LanguageSelector
          dropdownClassName="btn-circle btn-secondary btn-sm
          bg-base-content bg-opacity-[calc(5/6)] hover:bg-base-content
          join-item shadow-xl"
          buttonClassName="px-2 py-1.5"
          contentClassName="bg-base-content rounded-tl-none
          gap-2 pl-2 pr-[7px] py-1.5 top-0"
          tooltipClassName="tooltip-left"
        />
      </>
    );
  }

  return (
    <>
      <div className="fixed w-full z-30">
        <div
          className="navbar flex justify-between shadow-xl
          bg-base-content bg-opacity-[calc(2/3)]
          backdrop-blur-md rounded-box
          w-auto m-2"
        >
          <div>
            {/* GenWealth logo */}
            <a
              // href="#"
              onClick={(e) => setShowHamburgerMenu({ action: "scrollToTop", e })}
              className="flex gap-2 h-12"
            >
              <div className="btn btn-ghost btn-circle hover:bg-opacity-0">
                <img src="/GenWealth.ico" alt={title} loading="eager" className="mask mask-squircle" />
              </div>
              <span className="text-primary text-xl lg:text-2xl font-bold self-center max-md:hidden max-sm:flex">{title}</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-2" />

          <div className="gap-4">
            {/* Menu */}
            <div className="join gap-4 max-sm:hidden">
              {menus.map((menu) => (
                <a
                  key={menu.linkName}
                  // href={menu.linkId}
                  onClick={(e) => setShowHamburgerMenu({ action: "scrollToElement", e, args: [menu.linkId] })}
                  className="link link-hover text-center place-self-center join-item style-link"
                >
                  {menu.linkName}
                </a>
              ))}
            </div>

            {/* Launch App button */}
            <a href="https://preview.genwealth.app" className="button-primary">
              {intl.formatMessage({ id: "navBar.action1" })}
            </a>

            {/* (theme | language) */}
            <div className="gap-px z-40 -ml-2 join max-sm:hidden">
              <ThemeLanguage />
            </div>

            {/* Hamburger */}
            <label className="swap swap-rotate -ml-2 sm:hidden">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" className="hidden" onChange={() => setShowHamburgerMenu({ action: "toggle" })} checked={!showHamburgerMenu} />
              {/* hamburger icon */}
              <svg className="swap-on fill-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              {/* close icon */}
              <svg className="swap-off fill-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full h-min mx-auto inset-0 z-20 top-[4.5rem]
        ${showHamburgerMenu ? "pointer-events-auto ease-out" : "pointer-events-none ease-in scale-x-0 opacity-0 translate-x-full"}
        transition-all duration-150 sm:hidden`}
      >
        {/* Hamburger Menu */}
        <div
          className="bg-base-content bg-opacity-[calc(2/3)]
          backdrop-blur-lg rounded-box shadow-xl m-2
          w-[calc(100%-1rem)] h-[calc(100vh-5.5rem)]"
        >
          <div className="flex flex-col justify-between h-full">
            {/* (theme | language) */}
            <div className="flex justify-center gap-px shrink-0 m-2 z-40 self-end join">
              <ThemeLanguage />
            </div>

            {/* menu */}
            <ul tabIndex={0} className="text-center shrink overflow-auto style-mask-y-md p-2">
              {menus.map((menu) => (
                <li tabIndex={0} key={`pageMap.${menu.linkName}`} className="text-[10vw] style-link">
                  <a
                    // href={menu.linkId}
                    onClick={(e) => setShowHamburgerMenu({ action: "scrollToElement", e, args: [menu.linkId] })}
                    className="link link-hover join-item"
                  >
                    {menu.linkName}
                  </a>

                  <hr className="border-primary border-[1vw] w-[calc(700%/24)] mx-auto my-[5vw] scale-50" />
                </li>
              ))}
            </ul>

            {/* footer */}
            <div className="shrink-0 -m-2">
              <Footer className="bg-none text-primary" onClickScrollToTop={() => setShowHamburgerMenu({ action: "toggle" })} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
