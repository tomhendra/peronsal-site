import { GitHub, Twitter } from "react-feather";
import TomhendraLogo from "../Logo";
import VisuallyHidden from "../VisuallyHidden";
import MaxWidthContainer from "../MaxWidthContainer";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as logoLinks } from "~/components/Logo";
import { links as visuallyHiddenLinks } from "~/components/VisuallyHidden";
import styles from "./Footer.styles.css";

const links: LinksFunction = () => [
  ...logoLinks(),
  ...visuallyHiddenLinks(),
  { rel: "stylesheet", href: styles },
];

function Footer() {
  return (
    <footer className="footer">
      <MaxWidthContainer>
        <div className="footer-container">
          <div className="social-container">
            <a
              href="https://twitter.com/tomhendra"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
              <VisuallyHidden>
                Link to Tom Hendra's Twitter Account
              </VisuallyHidden>
            </a>
            <a
              href="https://github.com/tomhendra"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
              <VisuallyHidden>
                Link to Tom Hendra's GitHub Account
              </VisuallyHidden>
            </a>
          </div>
          <a className="logo-container" href="/">
            <TomhendraLogo />
            <span className="wordmark">Tom Hendra</span>
            <VisuallyHidden>Tom Hendra logo - Home</VisuallyHidden>
          </a>
          <div className="copyright">
            <span className="copyright-text">
              &copy; {new Date().getFullYear()} Tom Hendra
            </span>
          </div>
        </div>
      </MaxWidthContainer>
    </footer>
  );
}

export { links, Footer as default };
