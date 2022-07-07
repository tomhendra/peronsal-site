import {Outlet} from '@remix-run/react';
import Header from '../Header';
import Footer from '../Footer';
import MobileMenu from '../MobileMenu';
import type {LinksFunction} from '@remix-run/cloudflare';

import {links as headerLinks} from '../Header';
import {links as footerLinks} from '../Footer';
import {links as mobileMenuLinks} from '../MobileMenu';
import styles from './layout.css';

const links: LinksFunction = () => [
  ...headerLinks(),
  ...footerLinks(),
  ...mobileMenuLinks(),
  {rel: 'stylesheet', href: styles},
];

function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <MobileMenu />
      <Outlet />
      <Footer />
    </div>
  );
}

export {links, Layout as default};
