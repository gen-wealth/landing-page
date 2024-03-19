import { createContext, useContext, useEffect, useState } from "react";

type Theme = "sun" | "moon";

function getStoredTheme() {
  return (localStorage.getItem("genwealth.theme") || "moon") as Theme;
}
function setStoredTheme(theme: Theme) {
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

  localStorage.setItem("genwealth.theme", theme);
}

const ThemeContext = createContext<
  [
    string, // Theme
    (theme: Theme) => void // to change theme
  ]
>(["", setStoredTheme]);
export const useTheme = () => useContext(ThemeContext);

function ThemeProvider(props: { children: JSX.Element }) {
  const [currTheme, setCurrTheme] = useState("");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    updateTheme(storedTheme);
  }, []);

  const updateTheme = (theme: Theme) => {
    setStoredTheme(theme);
    setCurrTheme(theme);
  };

  return <ThemeContext.Provider value={[currTheme, updateTheme]}>{props.children}</ThemeContext.Provider>;
}

export default ThemeProvider;
