import { useIntl } from "react-intl";
import { scrollToTop } from "../util";
import ThemeController from "../contexts/theme/ThemeController";
import Svg from "./Svg";

function Footer(props: { className?: string; onClickScrollToTop?: () => void }) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "genWealth" });

  return (
    <div className="max-w-screen-xl mx-auto min-[1792px]:hidden">
      <footer
        className={`footer max-sm:flex max-sm:flex-col items-center p-4 rounded-box m-2 w-auto shadow-xl
        ${props.className ?? "bg-neutral bg-opacity-[calc(2/3)] text-neutral-content"}`}
      >
        {/* Copyright */}
        <aside className="items-center text-center flex flex-wrap sm:flex-nowrap">
          {/* scroll to top */}
          <a
            // href="#"
            onClick={(e) => {
              if (props.onClickScrollToTop) props.onClickScrollToTop();
              scrollToTop(e);
            }}
            className="flex max-sm:flex-col gap-2 max-sm:gap-0 font-bold items-center mx-auto"
          >
            <div className="btn btn-ghost btn-circle hover:bg-opacity-0">
              <img src="/GenWealth.ico" alt={title} loading="eager" className="w-12 mask mask-squircle" />
            </div>

            <p className="text-sm max-sm:text-xl max-sm:w-full">{title}</p>

            <span className="text-xs max-sm:hidden">&laquo;</span>
            <p className="text-sm max-sm:text-xs max-sm:w-full">{intl.formatMessage({ id: "tagLine" })}</p>
            <span className="text-xs max-sm:hidden">&raquo;</span>
          </a>

          <p className="text-xs max-sm:w-full">{intl.formatMessage({ id: "copyright" })}</p>
        </aside>

        {/* Socials */}
        <nav className="grid-flow-col gap-4 sm:justify-self-end max-sm:place-self-center max-sm:-mt-6">
          {/* <ThemeController
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
          /> */}
          <a href="https://twitter.com/genwealth_app" aria-label="Twitter">
            <Svg xlinkHref="#social-twitter" w={24} h={24} className="fill-current" />
          </a>
          <a href="https://www.linkedin.com/company/genwealth-app" aria-label="LinkedIn">
            <Svg xlinkHref="#social-linkedin" w={24} h={24} className="fill-current" />
          </a>
          <a href="https://github.com/gen-wealth" aria-label="GitHub">
            <Svg xlinkHref="#social-github" w={24} h={24} className="fill-current" />
          </a>
          <a href="mailto:hello@genwealth.app" aria-label="Email">
            <Svg xlinkHref="#social-email" w={24} h={24} className="fill-current" />
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
