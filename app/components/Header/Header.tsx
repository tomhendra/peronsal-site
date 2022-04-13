import type { LinksFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import styles from "./Header.css";
import Logo, { links as logoStyles } from "../Logo";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }, ...logoStyles()];
};

export default function Header() {
  return (
    <header className="header">
      <div className="header-container u-max-width-container">
        <Link className="logo-container" to="/">
          <Logo />
          <span className="wordmark">Tom Hendra</span>
          <span className="u-visually-hidden">Tom Hendra logo - Home</span>
        </Link>
        <nav>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </nav>
        <button>theme</button>
      </div>
    </header>
  );
}
