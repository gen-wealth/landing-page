import { FormattedMessage } from "react-intl";
import { scrollToElement } from "../util";

function Hero() {
  return (
    <div className="hero min-h-screen style-hero bg-[url('https://gen-wealth.github.io/public/hero/Bg.webp')]">
      <div className="hero-overlay bg-opacity-[calc(2/3)]" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-screen-xl">
          <h1 className="mt-[min(5vw,5vh)] text-[min(10vw,10vh)] font-bold style1 logo">
            <FormattedMessage id="genWealth" />
          </h1>
          <p className="-mt-[min(1.25vw,1.25vh)] mb-[min(2.5vw,2.5vh)] text-[min(5vw,5vh)] style3 logo">
            <FormattedMessage id="tagLine" />
          </p>
          <button onClick={(e) => scrollToElement(e, "our-service")} className="button-secondary">
            <FormattedMessage id="hero.action1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
