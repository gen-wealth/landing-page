import { scrollToElement, scrollToTop } from "../util";

function NavBar() {
  type menu = {
    linkName: string;
    linkURL: string;
  };

  const menus: menu[] = [
    {
      linkName: "Our Service",
      linkURL: "#our-service",
    },
    {
      linkName: "How it Works",
      linkURL: "#how-it-works",
    },
    {
      linkName: "About Us",
      linkURL: "#about-us",
    },
    {
      linkName: "Contact Us",
      linkURL: "#contact-us",
    },
  ];

  return (
    <div className="fixed w-full max-w-screen-xl h-min mx-auto inset-0 z-50">
      <div className="flex justify-between navbar shadow-xl bg-base-content bg-opacity-100 rounded-box m-2 w-auto">
        <div>
          {/* GenWealth logo */}
          <a
            // href="#"
            onClick={scrollToTop}
            className="flex gap-2 h-12"
          >
            <div className="btn btn-ghost btn-circle hover:bg-opacity-0">
              <img alt="GenWealth" src="/GenWealth.ico" className="mask mask-squircle" />
            </div>
            <span className="text-purple-950 xl:text-3xl lg:text-2xl md:text-xl max-sm:text-lg font-bold self-center max-md:hidden max-sm:flex">GenWealth</span>
          </a>
        </div>

        <div className="gap-4">
          {/* Menu */}
          <div className="join gap-4 max-sm:hidden">
            {menus.map((menu) => (
              <a
                key={menu.linkName}
                // href={menu.linkURL}
                onClick={(e) => scrollToElement(e, menu.linkURL)}
                className="link link-hover join-item style-link"
              >
                {menu.linkName}
              </a>
            ))}
          </div>

          {/* Launch App button */}
          <a href="https://preview.genwealth.app" className="button-primary">
            Launch app
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
