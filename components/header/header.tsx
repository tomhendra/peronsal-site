import { JSX } from "preact/jsx-runtime";
import { DarkMode } from "../../islands/dark-mode.tsx";

export function Header({ children }: JSX.ElementChildrenAttribute) {
  return (
    <div class="header">
      <img
        class="logo"
        src="/images/logo.svg"
        width="40"
        height="40"
        alt="the Tom Hendra logo: an abstract butterfly signifying change"
      />
      <h1 class="title">{children}</h1>
      <DarkMode prev={"system"} />
    </div>
  );
}
