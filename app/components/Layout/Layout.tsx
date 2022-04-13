// import React from "react";
import type { LinksFunction } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";
import Header, { links as headerStyles } from "~/components/Header";
import Footer, { links as footerStyles } from "~/components/Footer";
import styles from "./Layout.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...headerStyles(),
  ...footerStyles(),
];

export default function Layout() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  // const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="layout-container">
      <Header />
      {/* <MobileMenuButton onClick={toggleMobileMenu} /> */}
      {/* <MobileMenu open={isMobileMenuOpen} close={toggleMobileMenu} /> */}
      <Outlet />
      <Footer />
    </div>
  );
}
