import Svg from "./Svg";
import { useTheme } from "./ThemeProvider";

type SvgProps = { w?: number; h?: number; className?: string; filter?: string };
function ThemeController(props: { className?: string; sun: SvgProps; moon: SvgProps }) {
  const [currTheme, setCurrTheme] = useTheme();

  return (
    <label className={`swap swap-rotate ${props.className}`}>
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onChange={() => setCurrTheme(currTheme === "sun" ? "moon" : "sun")} checked={currTheme === "sun"} />
      {/* sun icon */}
      <Svg xlinkHref="#theme-sun" w={props.sun.w} h={props.sun.h} className={`swap-on ${props.sun.className}`} filter={props.sun.filter} />
      {/* moon icon */}
      <Svg xlinkHref="#theme-moon" w={props.moon.w} h={props.moon.h} className={`swap-off ${props.moon.className}`} filter={props.moon.filter} />
    </label>
  );
}

export default ThemeController;
