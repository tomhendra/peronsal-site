// import React from "react";
import type { LinksFunction } from "@remix-run/cloudflare";
// import MobileMenuButton, {
//   links as mobileMenuButtonStyles,
// } from "../MobileMenuButton";

import styles from "./MobileMenu.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  // ...mobileMenuButtonStyles(),
];

export default function MobileMenu() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  // const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return <div>mobile menu</div>;
}
