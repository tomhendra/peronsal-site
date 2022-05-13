import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "../Link";
import MobileMenuButton from "./MobileMenuButton";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as linkLinks } from "../Link";
import { links as mobileMenuButtonLinks } from "./MobileMenuButton";
import styles from "./mobile-menu.css";

const links: LinksFunction = () => [
  ...linkLinks(),
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
                <Link variant="gray" size="lg" to="/">
                  Home
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link variant="gray" size="lg" to="/projects">
                  Projects
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link variant="gray" size="lg" to="/about">
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
