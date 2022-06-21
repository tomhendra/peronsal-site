import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import Link from "../Link";
import { Menu, X } from "react-feather";
import VisuallyHidden from "~/components/VisuallyHidden";
import { motion, AnimatePresence } from "framer-motion";
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
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  // todo - mess around with animations in framer-motion! :D
  const MotionDialogOverlay = motion(DialogOverlay);
  const MotionDialogContent = motion(DialogContent);

  return (
    <AnimatePresence>
      {!isOpen && (
        <button
          className="mobile-menu-button click-target-helper"
          onClick={open}
        >
          <VisuallyHidden>Open the mobile menu</VisuallyHidden>
          <Menu aria-hidden />
        </button>
      )}
      {isOpen && (
        <MotionDialogOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          isOpen={isOpen}
          onDismiss={close}
          aria-labelledby="mobile-menu-title"
          aria-describedby="mobile-menu-description"
        >
          <MotionDialogContent
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ min: 0, max: 100, bounceDamping: 9 }}
            aria-label="Mobile menu"
          >
            <VisuallyHidden>
              <h2 id="mobile-menu-title">Mobile Menu</h2>
              <p id="mobile-menu-description">
                Navigate to another part of the website.
              </p>
            </VisuallyHidden>
            <nav className="mobile-menu-nav">
              <Link variant="gray" size="lg" to="/" onClick={close}>
                Home
              </Link>
              <Link variant="gray" size="lg" to="/#projects" onClick={close}>
                Projects
              </Link>
              <Link variant="gray" size="lg" to="/#about" onClick={close}>
                About
              </Link>
              <Link variant="gray" size="lg" to="/#contact" onClick={close}>
                Contact
              </Link>
            </nav>
          </MotionDialogContent>
          <motion.button
            className="mobile-menu-button click-target-helper"
            onClick={close}
          >
            <X />
            <VisuallyHidden>Close the mobile menu</VisuallyHidden>
          </motion.button>
        </MotionDialogOverlay>
      )}
    </AnimatePresence>
  );
}

export { links, MobileMenu as default };
