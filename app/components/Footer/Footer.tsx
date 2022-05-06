import { Link } from "@remix-run/react";
import TomhendraLogo from "../Logo";
import VisuallyHidden from "../VisuallyHidden";
import MaxWidthContainer from "../MaxWidthContainer";
import Divider from "../Divider";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as logoLinks } from "~/components/Logo";
import { links as visuallyHiddenLinks } from "~/components/VisuallyHidden";
import { links as DividerLinks } from "~/components/Divider";
import styles from "./Footer.styles.css";

const links: LinksFunction = () => [
  ...logoLinks(),
  ...visuallyHiddenLinks(),
  ...DividerLinks(),
  { rel: "stylesheet", href: styles },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="nav-container">
          <a className="logo-container" href="/">
            <TomhendraLogo />
            <span className="wordmark">Tom Hendra</span>
            <VisuallyHidden>Tom Hendra logo - Home</VisuallyHidden>
          </a>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#contact">Contact</Link>
          </nav>
        </div>
        <Divider />
        <MaxWidthContainer>
          <div className="copyright-container">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Tom Hendra
            </p>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </MaxWidthContainer>
      </div>
    </footer>
  );
}

export { links, Footer as default };
