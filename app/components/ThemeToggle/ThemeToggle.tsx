/* 
  Dark mode implementation thanks to Matt Stobbs: 
  https://www.mattstobbs.com/remix-dark-mode/

  Hopefully this ceremony will become a relic of the past in the future 
  https://tabatkins.github.io/css-toggle/
*/
import { Moon, Sun } from "react-feather";
import { Theme, useTheme } from "~/helpers/theme-provider";
import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./styles.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === Theme.LIGHT ? <Sun /> : <Moon />}
    </button>
  );
}

export { links, ThemeToggle as default };
