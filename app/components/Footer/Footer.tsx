import Link from '../Link';
import TomhendraLogo from '../Logo';
import VisuallyHidden from '../VisuallyHidden';
import MaxWidthContainer from '../MaxWidthContainer';
import Divider from '../Divider';
import type {LinksFunction} from '@remix-run/cloudflare';

import {links as logoLinks} from '../Logo';
import {links as visuallyHiddenLinks} from '../VisuallyHidden';
import {links as dividerLinks} from '../Divider';
import {links as linkLinks} from '../Link';
import styles from './footer.css';

const links: LinksFunction = () => [
  ...logoLinks(),
  ...visuallyHiddenLinks(),
  ...dividerLinks(),
  ...linkLinks(),
  {rel: 'stylesheet', href: styles},
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <MaxWidthContainer>
          <div className="nav-container">
            <Link to="/" className="logo-container">
              <TomhendraLogo />
              <span className="wordmark">Tom Hendra</span>
              <VisuallyHidden>Tom Hendra logo - Home</VisuallyHidden>
            </Link>
            <nav className="footer-nav">
              <Link to="/" size="md" className="footer-link">
                Latest
              </Link>
              <Link to="/posts" size="md" className="footer-link">
                Posts
              </Link>
            </nav>
          </div>
        </MaxWidthContainer>
        <Divider variant="primary" />
        <span className="copyright">
          &copy; {new Date().getFullYear()} Tom Hendra
        </span>
      </div>
    </footer>
  );
}

export {links, Footer as default};
