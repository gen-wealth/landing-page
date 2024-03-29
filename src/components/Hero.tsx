import { useIntl } from "react-intl";
import { scrollToElement } from "../util";

function Hero() {
  const intl = useIntl();

  return (
    <div className="hero min-h-screen style-hero bg-[url('https://gen-wealth.github.io/public/hero/Bg.jpg')]">
      <div className="hero-overlay bg-opacity-[calc(2/3)]" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mt-10 text-5xl font-bold style1">{intl.formatMessage({ id: "genWealth" })}</h1>
          <p className="mb-5 style3">{intl.formatMessage({ id: "tagLine" })}</p>
          <a
            // href="#our-service"
            onClick={(e) => scrollToElement(e, "our-service")}
            className="button-secondary"
          >
            {intl.formatMessage({ id: "hero.action1" })}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
