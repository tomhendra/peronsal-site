import Link from '../Link';
import Logo from '../Logo';
import ThemeToggle from '../ThemeToggle';
import VisuallyHidden from '../VisuallyHidden';
import MaxWidthContainer from '../MaxWidthContainer';
import type {LinksFunction} from '@remix-run/cloudflare';

import {links as linksLinks} from '../Link';
import {links as logoLinks} from '../Logo';
import {links as themeToggleLinks} from '../ThemeToggle';
import {links as visuallyHiddenLinks} from '../VisuallyHidden';
import {links as maxWidthContainerLinks} from '../MaxWidthContainer';
import styles from './header.css';

const links: LinksFunction = () => [
  ...linksLinks(),
  ...logoLinks(),
  ...themeToggleLinks(),
  ...visuallyHiddenLinks(),
  ...maxWidthContainerLinks(),
  {rel: 'stylesheet', href: styles},
];

function Header() {
  return (
    <header className="header">
      <MaxWidthContainer>
        <div className="container">
          <Link to="/" className="logo-container">
            <Logo />
            <span className="wordmark">Tom Hendra</span>
            <VisuallyHidden>Tom Hendra logo - Home</VisuallyHidden>
          </Link>
          <nav>
            <Link to="/" size="lg" variant="white">
              Latest
            </Link>
            <Link to="/posts" size="lg" variant="white">
              Posts
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </MaxWidthContainer>
    </header>
  );
}

export {links, Header as default};
