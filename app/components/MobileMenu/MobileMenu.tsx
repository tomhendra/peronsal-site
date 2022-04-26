import React from "react";
import { Link } from "@remix-run/react";
import * as Dialog from "@radix-ui/react-dialog";
import MobileMenuButton from "./MobileMenuButton";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as mobileMenuButtonLinks } from "./MobileMenuButton";
import styles from "./MobileMenu.styles.css";

const links: LinksFunction = () => [
  ...mobileMenuButtonLinks(),
  { rel: "stylesheet", href: styles },
];

function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <MobileMenuButton toggleMenu={toggleMobileMenu} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-menu-overlay" />
        <Dialog.Content>
          <Dialog.Title>Mobile Menu</Dialog.Title>
          <Dialog.Description>
            Navigate to another part of the website, or toggle the colour theme.
          </Dialog.Description>
          <div className="mobile-menu">
            <nav className="mobile-menu-nav">
              <Dialog.Close asChild>
                <Link className="mobile-menu-nav-link" to="/">
                  Home
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link className="mobile-menu-nav-link" to="/projects">
                  Projects
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link className="mobile-menu-nav-link" to="/about">
                  About
                </Link>
              </Dialog.Close>
            </nav>
          </div>
          <Dialog.Close asChild>
            <MobileMenuButton toggleMenu={toggleMobileMenu} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { links, MobileMenu as default };
