import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "../Link";
import { Menu } from "react-feather";
import VisuallyHidden from "~/components/VisuallyHidden";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as linkLinks } from "../Link";
import { links as visuallyHiddenLinks } from "~/components/VisuallyHidden";
import styles from "./mobile-menu.css";

const links: LinksFunction = () => [
  ...linkLinks(),
  ...visuallyHiddenLinks(),
  { rel: "stylesheet", href: styles },
];

function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <Dialog.Root open={isOpen} onOpenChange={toggleMobileMenu}>
      <Dialog.Trigger asChild>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <Menu />
          <VisuallyHidden>Open and close the mobile menu</VisuallyHidden>
        </button>
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
            <Link variant="gray" size="lg" to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link
              variant="gray"
              size="lg"
              to="/#projects"
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
            <Link
              variant="gray"
              size="lg"
              to="/#about"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              variant="gray"
              size="lg"
              to="/#contact"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { links, MobileMenu as default };
