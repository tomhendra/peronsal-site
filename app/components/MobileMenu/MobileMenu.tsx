import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import type { LinksFunction } from "@remix-run/cloudflare";
import MobileMenuButton, {
  links as mobileMenuButtonStyles,
} from "./MobileMenuButton";
import ThemeToggle, { links as themeToggleStyles } from "../ThemeToggle";

import styles from "./MobileMenu.css";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...mobileMenuButtonStyles(),
  ...themeToggleStyles(),
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <MobileMenuButton onClick={() => toggleMobileMenu} />
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link className="mobile-menu-nav-link" to="/about">
                  About
                </Link>
              </Dialog.Close>
            </nav>
            <ThemeToggle />
          </div>
          <Dialog.Close asChild>
            <MobileMenuButton onClick={() => toggleMobileMenu} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
