import { scrollToTop } from "../util";
import Svg from "./Svg";

function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <footer className="footer max-sm:flex max-sm:flex-col items-center p-4 bg-neutral text-neutral-content rounded-box m-2 w-auto">
        <aside className="items-center flex flex-wrap sm:flex-nowrap">
          <a
            // href="#"
            onClick={scrollToTop}
            className="flex max-sm:flex-col gap-2 items-center mx-auto"
          >
            <div className="btn btn-ghost btn-circle hover:bg-opacity-0">
              <img alt="GenWealth" src="/GenWealth.ico" className="w-12 mask mask-squircle" />
            </div>
            <h5 className="max-sm:w-full font-bold text-center">GenWealth</h5>
          </a>
          {/* <img src="/CardanoWhite.svg" width={20} className="max-sm:hidden" /> */}
          <span className="max-sm:hidden">&laquo;</span>
          <h6 className="max-sm:w-full font-bold text-center">The Crypto Inheritance Protocol</h6>
          {/* <span className="md:hidden">&bull;</span> */}
          {/* <img src="/CardanoWhite.svg" width={20} className="max-sm:hidden" /> */}
          <span className="max-sm:hidden">&raquo;</span>
          <p className="max-sm:w-full text-center">Copyright © 2024 - All rights reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 max-sm:place-self-center sm:justify-self-end">
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
