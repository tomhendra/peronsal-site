import type { LinksFunction } from "@remix-run/cloudflare";
import styles from "./footer.css";
import TomhendraLogo, { links as tomhendraLogoStyles } from "../Logo";
import VisuallyHidden, {
  links as visuallyHiddenStyles,
} from "../VisuallyHidden";
import { GitHub, Twitter } from "react-feather";
import MaxWidthContainer from "../MaxWidthContainer";

const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...tomhendraLogoStyles(),
  ...visuallyHiddenStyles(),
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
