import { createContext, useContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "../../cookie";

type Theme = "sun" | "moon";

function getTheme() {
  return (getCookie()?.theme || // if no cookie, matches preference?
    (window.matchMedia("(prefers-color-scheme: light)").matches
      ? "sun" // fallback:
      : "moon")) as Theme;
}
function setTheme(theme: Theme) {
  const html = document.documentElement;
  html.setAttribute("data-theme", theme);

  const style = html.style;
  switch (theme) {
    case "sun":
      style.background =
        "radial-gradient(ellipse at bottom, #d4f9c0, transparent), radial-gradient(ellipse at top, #6e4656, transparent), radial-gradient(farthest-corner at top right, #ff3355 0%, #4433eef3 100%)";
      break;

    default:
      style.background = "";
      break;
  }
}

const ThemeContext = createContext<
  [
    string, // Theme
    (theme: Theme) => void // to change theme
  ]
>(["", setTheme]);
export const useTheme = () => useContext(ThemeContext);

function ThemeProvider(props: { children: JSX.Element }) {
  const [currTheme, setCurrTheme] = useState("");

  useEffect(() => {
    const storedTheme = getTheme();
    setTheme(storedTheme);
    setCurrTheme(storedTheme);
  }, []);

  const updateTheme = (theme: Theme) => {
    setTheme(theme);
    setCurrTheme(theme);
    setCookie({ theme });
  };

  return <ThemeContext.Provider value={[currTheme, updateTheme]}>{props.children}</ThemeContext.Provider>;
}

export default ThemeProvider;
