import { useEffect, useState } from "react";
import Svg from "./Svg";

type Theme = "sun" | "moon";
type SvgProps = { w?: number; h?: number; className?: string; filter?: string };

function ThemeController(props: { className?: string; sun: SvgProps; moon: SvgProps }) {
  const [currTheme, setCurrTheme] = useState(getTheme());

  useEffect(() => setTheme(currTheme), [currTheme]);

  return (
    <label className={`swap swap-rotate ${props.className}`}>
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        onChange={() => {
          setCurrTheme(currTheme === "sun" ? "moon" : "sun");
          location.reload(); // TODO: Use a proper theming system!
        }}
        checked={currTheme === "sun"}
      />
      {/* sun icon */}
      <Svg xlinkHref="#theme-sun" w={props.sun.w} h={props.sun.h} className={`swap-on ${props.sun.className}`} filter={props.sun.filter} />
      {/* moon icon */}
      <Svg xlinkHref="#theme-moon" w={props.moon.w} h={props.moon.h} className={`swap-off ${props.moon.className}`} filter={props.moon.filter} />
    </label>
  );
}

export const getTheme = () => (localStorage.getItem("genwealth.theme") || "moon") as Theme;
export function setTheme(theme: Theme) {
  switch (theme) {
    case "sun":
      document.documentElement.style.background =
        "radial-gradient(ellipse at bottom, #d4f9c0f3, transparent), radial-gradient(ellipse at top, #6e4656f3, transparent), radial-gradient(farthest-corner at top right, #ff3355f3 0%, #4433eef3 100%)";
      break;

    default:
      document.documentElement.style.background = "";
      break;
  }

  localStorage.setItem("genwealth.theme", theme);
}

export default ThemeController;
