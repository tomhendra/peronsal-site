import type { LinksFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import styles from "./header.css";
import Logo, { links as logoStyles } from "../Logo";
import ThemeToggle, { links as themeToggleStyles } from "../ThemeToggle";
import VisuallyHidden, {
  links as VisuallyHiddenStyles,
} from "../VisuallyHidden";
import MaxWidthContainer, {
  links as maxWidthContainerStyles,
} from "../MaxWidthContainer";

const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...logoStyles(),
  ...themeToggleStyles(),
  ...VisuallyHiddenStyles(),
  ...maxWidthContainerStyles(),
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
