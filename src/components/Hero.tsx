import { FormattedMessage } from "react-intl";
import { scrollToElement } from "../util";

function Hero() {
  return (
    <div className="hero min-h-screen style-hero bg-[url('https://gen-wealth.github.io/public/hero/Bg.webp')]">
      <div className="hero-overlay bg-opacity-[calc(2/3)]" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mt-10 text-5xl font-bold style1">
            <FormattedMessage id="genWealth" />
          </h1>
          <p className="mb-5 style3">
            <FormattedMessage id="tagLine" />
          </p>
          <a
            // href="#our-service"
            onClick={(e) => scrollToElement(e, "our-service")}
            className="button-secondary"
          >
            <FormattedMessage id="hero.action1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
