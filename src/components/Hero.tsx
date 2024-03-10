import { scrollToElement } from "../util";

function Hero() {
  return (
    <div className="hero min-h-screen style-hero bg-[url('/HeroBg.jpg')]">
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mt-10 text-5xl font-bold style1">GenWealth</h1>
          <p className="mb-5 style3">The Crypto Inheritance Protocol</p>
          <a
            // href="#our-service"
            onClick={(e) => scrollToElement(e, "#our-service")}
            className="button-primary"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
