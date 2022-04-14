import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";

import Header, { links as headerStyles } from "../Header";
import Footer, { links as footerStyles } from "../Footer";
import MobileMenu, { links as mobileMenuStyles } from "../MobileMenu";

import styles from "./Layout.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...headerStyles(),
  ...mobileMenuStyles(),
  ...footerStyles(),
];

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <MobileMenu />
      <Outlet />
      <Footer />
    </div>
  );
}
