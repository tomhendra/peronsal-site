import type { LinksFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import styles from "./Header.css";
import Logo, { links as logoStyles } from "../Logo";
import ThemeToggle, { links as themeToggleStyles } from "../ThemeToggle";
import VisuallyHidden, {
  links as VisuallyHiddenStyles,
} from "../VisuallyHidden";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...logoStyles(),
  ...themeToggleStyles(),
  ...VisuallyHiddenStyles(),
];

export default function Header() {
  return (
    <header className="header">
      <div className="header-container u-max-width-container">
        <Link className="logo-container" to="/">
          <Logo />
          <span className="wordmark">Tom Hendra</span>
          <VisuallyHidden>Tom Hendra logo - Home</VisuallyHidden>
        </Link>
        <nav>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
