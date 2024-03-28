import { FormattedMessage } from "react-intl";
import { scrollToTop } from "../util";
import Svg from "./Svg";

function Footer3() {
  return (
    <footer className="footer footer-center gap-4">
      <aside>
        <a
          // href="#"
          onClick={scrollToTop}
        >
          <p className="font-bold text-base">
            <FormattedMessage id="genWealth" />
          </p>
          <p className="font-bold text-sm">
            <FormattedMessage id="tagLine" />
          </p>
        </a>
        <p className="text-xs">
          <FormattedMessage id="copyright" />
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-2">
          <a href="https://twitter.com/genwealth_app" aria-label="Twitter">
            <Svg xlinkHref="#social-twitter" w={16} h={16} className="fill-current" />
          </a>
          <a href="https://www.linkedin.com/company/genwealth-app" aria-label="LinkedIn">
            <Svg xlinkHref="#social-linkedin" w={16} h={16} className="fill-current" />
          </a>
          <a href="https://github.com/gen-wealth" aria-label="GitHub">
            <Svg xlinkHref="#social-github" w={16} h={16} className="fill-current" />
          </a>
          <a href="mailto:hello@genwealth.app" aria-label="Email">
            <Svg xlinkHref="#social-email" w={16} h={16} className="fill-current" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer3;
