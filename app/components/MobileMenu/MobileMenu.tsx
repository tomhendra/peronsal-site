import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "../Link";
import MobileMenuButton from "./MobileMenuButton";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as linkLinks } from "../Link";
import { links as mobileMenuButtonLinks } from "./MobileMenuButton";
import styles from "./mobile-menu.css";
import VisuallyHidden from "../VisuallyHidden";

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
        <Dialog.Content className="mobile-menu-content">
          <VisuallyHidden>
            <Dialog.Title>Menu</Dialog.Title>
            <Dialog.Description>
              Navigate to another part of the website.
            </Dialog.Description>
          </VisuallyHidden>
          <nav className="mobile-menu-nav">
            <Dialog.Close asChild>
              <Link variant="gray" size="lg" to="/">
                Home
              </Link>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Link variant="gray" size="lg" to="/#projects">
                Projects
              </Link>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Link variant="gray" size="lg" to="/#about">
                About
              </Link>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Link variant="gray" size="lg" to="/#contact">
                Contact
              </Link>
            </Dialog.Close>
          </nav>
        </Dialog.Content>
        <Dialog.Close asChild>
          <MobileMenuButton toggleMenu={toggleMobileMenu} />
        </Dialog.Close>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { links, MobileMenu as default };
