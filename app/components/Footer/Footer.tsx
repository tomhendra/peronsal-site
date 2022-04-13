import type { LinksFunction } from "@remix-run/cloudflare";
import styles from "./Footer.css";
import TomhendraLogo, { links as tomhendraLogoStyles } from "../Logo";
import { GitHub, Twitter } from "react-feather";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...tomhendraLogoStyles(),
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container u-max-width-container">
        <div className="social-container">
          <a
            href="https://twitter.com/tomhendra"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
            <span className="u-visually-hidden">
              Link to Tom Hendra's Twitter Account
            </span>
          </a>
          <a
            href="https://github.com/tomhendra"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
            <span className="u-visually-hidden">
              Link to Tom Hendra's GitHub Account
            </span>
          </a>
        </div>
        <a className="logo-container" href="/">
          <TomhendraLogo />
          <span className="wordmark">Tom Hendra</span>
          <span className="u-visually-hidden">Tom Hendra logo - Home</span>
        </a>
        <div className="copyright">
          <span className="copyright-text">
            &copy; {new Date().getFullYear()} Tom Hendra
          </span>
        </div>
      </div>
    </footer>
  );
}
