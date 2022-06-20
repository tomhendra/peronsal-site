import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "../Link";
import { Menu, X } from "react-feather";
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
  let [isOpen, setIsOpen] = React.useState<boolean>(false);
  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return (
    <>
      {!isOpen && (
        <button
          className="mobile-menu-button click-target-helper"
          onClick={openMenu}
        >
          <Menu />
          <VisuallyHidden>Open the mobile menu</VisuallyHidden>
        </button>
      )}

      <Transition show={isOpen}>
        <Dialog onClose={closeMenu}>
          <Transition.Child
            enter="mobile-menu-overlay-enter"
            enterFrom="mobile-menu-overlay-enter-from"
            enterTo="mobile-menu-overlay-enter-to"
            leave="mobile-menu-overlay-leave"
            leaveFrom="mobile-menu-overlay-leave-from"
            leaveTo="mobile-menu-overlay-leave-to"
          >
            <div className="mobile-menu-overlay" />
          </Transition.Child>
          <Transition.Child
            enter="mobile-menu-content-enter"
            enterFrom="mobile-menu-content-enter-from"
            enterTo="mobile-menu-content-enter-to"
            leave="mobile-menu-content-leave"
            leaveFrom="mobile-menu-content-leave-from"
            leaveTo="mobile-menu-content-leave-to"
          >
            <Dialog.Panel className="mobile-menu-content" aria-hidden="true">
              <VisuallyHidden>
                <Dialog.Title>Menu</Dialog.Title>
                <Dialog.Description>
                  Navigate to another part of the website.
                </Dialog.Description>
              </VisuallyHidden>
              <nav className="mobile-menu-nav">
                <Link variant="gray" size="lg" to="/" onClick={closeMenu}>
                  Home
                </Link>
                <Link
                  variant="gray"
                  size="lg"
                  to="/#projects"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
                <Link variant="gray" size="lg" to="/#about" onClick={closeMenu}>
                  About
                </Link>
                <Link
                  variant="gray"
                  size="lg"
                  to="/#contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </nav>
            </Dialog.Panel>
            {/* info: the close button only appears to work as a child of 
              Dialog.Panel, which is not explicitly mentioned in the docs. we 
              cannot toggle state on one button outside of Dialog.Panel */}
            <button
              className="mobile-menu-button click-target-helper"
              onClick={closeMenu}
            >
              <X />
              <VisuallyHidden>Close the mobile menu</VisuallyHidden>
            </button>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

export { links, MobileMenu as default };
