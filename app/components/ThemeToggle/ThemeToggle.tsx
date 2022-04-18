import { useState } from "react";
import type { LinksFunction } from "@remix-run/cloudflare";
import { Moon, Sun } from "react-feather";
import { Theme, useTheme } from "~/utils/theme-provider";
import styles from "./ThemeToggle.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function ThemeToggle() {
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
