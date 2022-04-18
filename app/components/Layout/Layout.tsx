import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";

import Header, { links as headerStyles } from "../Header";
import Footer, { links as footerStyles } from "../Footer";
import MobileMenu, { links as mobileMenuStyles } from "../MobileMenu";

import styles from "./layout.css";

const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...headerStyles(),
  ...mobileMenuStyles(),
  ...footerStyles(),
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

export { links, Layout as default };
