import { FormattedMessage } from "react-intl";
import { useTheme } from "../contexts/theme/ThemeProvider";

/**
 * For future use when we need to promote something.
 * @returns Promos
 */
function Marketing() {
  const [theme, _] = useTheme();

  return (
    <aside
      className="sticky inset-0 z-10
      w-[calc(.5*(100%-1280px)+8px)] h-0
      top-[4.5rem] ml-[calc(.5*(100%+1280px)-8px)] max-2xl:hidden"
    >
      <div className="flex flex-col gap-2 p-2 h-[calc(100vh-4.5rem)]">
        <a
          href="https://airbnb.com"
          target="_blank"
          className="grow aspect-[9/16] rounded-box
          bg-[url('/HeroBg.jpg')] bg-cover bg-center"
        >
          <div
            className={`hero-overlay relative
            ${
              theme === "moon"
                ? "bg-opacity-40 hover:bg-opacity-35" // dark
                : "bg-opacity-30 hover:bg-opacity-25" // light
            }
            rounded-box transition-all duration-500 flex`}
          >
            <div
              className="bg-base-content bg-opacity-75
              size-fit rounded-tl-box rounded-br-box"
            >
              <span
                className="text-white text-[.5vw] mix-blend-difference
                font-bold mx-2 capitalize"
              >
                <FormattedMessage id="ad" />
              </span>
            </div>

            <span
              className="absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              font-bold text-[2vw]
              mix-blend-soft-light"
            >
              AirBnB
            </span>
          </div>
        </a>

        <a
          href="https://soundcloud.com"
          target="_blank"
          className="shrink aspect-square rounded-box
          bg-[url('/ContactUs.jpg')] bg-cover"
        >
          <div
            className={`hero-overlay
            ${
              theme === "moon"
                ? "bg-opacity-40 hover:bg-opacity-35" // dark
                : "bg-opacity-30 hover:bg-opacity-25" // light
            }
            rounded-box transition-all duration-500 flex`}
          >
            <div
              className="bg-base-content bg-opacity-75
              size-fit rounded-tl-box rounded-br-box"
            >
              <span
                className="text-white text-[.5vw] mix-blend-difference
                font-bold mx-2 capitalize"
              >
                <FormattedMessage id="ad" />
              </span>
            </div>
          </div>
        </a>
      </div>
    </aside>
  );
}

export default Marketing;
