import Link from "../Link";
import TomhendraLogo from "../Logo";
import VisuallyHidden from "../VisuallyHidden";
import MaxWidthContainer from "../MaxWidthContainer";
import Divider from "../Divider";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as logoLinks } from "../Logo";
import { links as visuallyHiddenLinks } from "../VisuallyHidden";
import { links as dividerLinks } from "../Divider";
import { links as linkLinks } from "../Link";
import styles from "./footer.css";

const links: LinksFunction = () => [
  ...logoLinks(),
  ...visuallyHiddenLinks(),
  ...dividerLinks(),
  ...linkLinks(),
  { rel: "stylesheet", href: styles },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="nav-container">
          <Link to="/" className="logo-container">
            <TomhendraLogo />
            <span className="wordmark">Tom Hendra</span>
            <VisuallyHidden>Tom Hendra logo - Home</VisuallyHidden>
          </Link>
          <nav className="footer-nav">
            <Link variant="gray" size="md" to="/">
              Home
            </Link>
            <Link variant="gray" size="md" to="/#about">
              About
            </Link>
            <Link variant="gray" size="md" to="/#projects">
              Projects
            </Link>
            <Link variant="gray" size="md" to="/#contact">
              Contact
            </Link>
          </nav>
        </div>
        <Divider />
        <MaxWidthContainer>
          <div className="copyright-container">
            <span className="copyright-text">
              &copy; {new Date().getFullYear()} Tom Hendra
            </span>
            <Link to="/privacy-policy" variant="gray" size="md">
              Privacy Policy
            </Link>
          </div>
        </MaxWidthContainer>
      </div>
    </footer>
  );
}

export { links, Footer as default };
