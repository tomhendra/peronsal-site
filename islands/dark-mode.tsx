import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";
import {
  Button,
  LucideMonitorCheck,
  LucideMoon,
  LucideSun,
} from "../components/index.ts";
import { toCapitalized } from "../utils/general.ts";
import { JSX } from "preact/jsx-runtime";

type DarkModeProps = JSX.HTMLAttributes<HTMLDivElement> & {
  prev: "light" | "dark" | "system";
};

export function DarkMode({ prev, ...rest }: DarkModeProps) {
  const [mode, setMode] = useState(getMode());

  useEffect(() => {
    updateMode();
  }, [mode]);

  function getMode(): "light" | "dark" | "system" {
    if (!IS_BROWSER) {
      return prev;
    }
    if (localStorage.theme === "dark") {
      return "dark";
    }
    if (localStorage.theme) {
      return "light";
    }
    return "system";
  }

  function updateMode() {
    const w = window as unknown as { isDark: boolean };
    const prefersDark = "(prefers-color-scheme: dark)";

    w.isDark = localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia(prefersDark).matches);

    const theme = w.isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setDarkModeOn();
    } else if (mode === "dark") {
      setDarkModeAuto();
    } else {
      setDarkModeOff();
    }
  };

  const setDarkModeOn = () => {
    localStorage.theme = "dark";
    setMode("dark");
  };

  const setDarkModeAuto = () => {
    delete localStorage.theme;
    setMode("system");
  };

  const setDarkModeOff = () => {
    localStorage.theme = "light";
    setMode("light");
  };

  return (
    <div {...rest}>
      <Button onClick={toggleMode}>
        {mode === "dark" && <LucideMoon height={24} width={24} />}
        {mode === "system" && <LucideMonitorCheck height={24} width={24} />}
        {mode === "light" && <LucideSun height={24} width={24} />}
        <span class="visually-hidden">
          {toCapitalized(mode)}
        </span>
      </Button>
    </div>
  );
}
