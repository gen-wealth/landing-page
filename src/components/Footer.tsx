import { useIntl } from "react-intl";
import { scrollToTop } from "../util";
import ThemeController from "../contexts/theme/ThemeController";
import Svg from "./Svg";

function Footer() {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "genWealth" });

  return (
    <div className="max-w-screen-xl mx-auto 2xl:hidden">
      <footer className="footer max-sm:flex max-sm:flex-col items-center p-4 bg-neutral bg-opacity-[calc(2/3)] text-neutral-content rounded-box m-2 w-auto shadow-xl">
        <aside className="items-center flex flex-wrap sm:flex-nowrap">
          <a
            // href="#"
            onClick={scrollToTop}
            className="flex max-sm:flex-col gap-2 items-center mx-auto"
          >
            <div className="btn btn-ghost btn-circle hover:bg-opacity-0">
              <img alt={title} src="/GenWealth.ico" className="w-12 mask mask-squircle" />
            </div>

            <h5 className="max-sm:w-full font-bold text-center text-sm">{title}</h5>

            <span className="max-sm:hidden text-xs">&laquo;</span>
            <h6 className="max-sm:w-full font-bold text-center text-sm">{intl.formatMessage({ id: "tagLine" })}</h6>
            <span className="max-sm:hidden text-xs">&raquo;</span>
          </a>

          <p className="max-sm:w-full text-center text-xs">{intl.formatMessage({ id: "copyright" })}</p>
        </aside>
        <nav className="grid-flow-col gap-4 max-sm:place-self-center sm:justify-self-end">
          <ThemeController
            className="m-auto"
            sun={{
              w: 20,
              h: 20,
              className: "fill-current",
            }}
            moon={{
              w: 20,
              h: 20,
              className: "fill-current",
            }}
          />
          <a href="https://twitter.com/genwealth_app" aria-label="Twitter">
            <Svg xlinkHref="#social-twitter" w={23} h={23} className="fill-current" />
          </a>
          <a href="https://www.linkedin.com/company/genwealth-app" aria-label="LinkedIn">
            <Svg xlinkHref="#social-linkedin" w={23} h={23} className="fill-current" />
          </a>
          <a href="https://github.com/gen-wealth" aria-label="GitHub">
            <Svg xlinkHref="#social-github" w={23} h={23} className="fill-current" />
          </a>
          <a href="mailto:hello@genwealth.app" aria-label="Email">
            <Svg xlinkHref="#social-email" w={23} h={23} className="fill-current" />
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
