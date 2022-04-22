import { Link } from "@remix-run/react";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";
import VisuallyHidden from "../VisuallyHidden";
import MaxWidthContainer from "../MaxWidthContainer";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as logoLinks } from "../Logo";
import { links as themeToggleLinks } from "../ThemeToggle";
import { links as visuallyHiddenLinks } from "../VisuallyHidden";
import { links as maxWidthContainerLinks } from "../MaxWidthContainer";
import styles from "./styles.css";

const links: LinksFunction = () => [
  ...logoLinks(),
  ...themeToggleLinks(),
  ...visuallyHiddenLinks(),
  ...maxWidthContainerLinks(),
  { rel: "stylesheet", href: styles },
];

function Header() {
  return (
    <header className="header">
      <MaxWidthContainer>
        <div className="header-container">
          <Link className="logo-container" to="/">
            <Logo />
            <span className="wordmark">Tom Hendra</span>
            <VisuallyHidden>Tom Hendra logo - Home</VisuallyHidden>
          </Link>
          <nav>
            <Link to="/projects">Projects</Link>
            <Link to="#about">About</Link>
          </nav>
          <ThemeToggle />
        </div>
      </MaxWidthContainer>
    </header>
  );
}

export { links, Header as default };
