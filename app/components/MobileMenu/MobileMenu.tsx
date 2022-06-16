import React from "react";
import * as DialogPrimitive from "@radix-ui/react-Dialog";
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

type SheetProps = React.ComponentProps<typeof DialogPrimitive.Root>;

export function Sheet({ children, ...props }: SheetProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Overlay className="mobile-menu-overlay" />
      {children}
    </DialogPrimitive.Root>
  );
}

type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentPrimitiveProps
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Content
    className="mobile-menu-content"
    {...props}
    ref={forwardedRef}
  >
    {children}
  </DialogPrimitive.Content>
));

SheetContent.displayName = "SheetContent";

export { SheetContent };
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;

function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={toggleMobileMenu}>
      <DialogPrimitive.Trigger asChild>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <Menu />
          <VisuallyHidden>Open and close the mobile menu</VisuallyHidden>
        </button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Overlay className="mobile-menu-overlay" />
      <DialogPrimitive.Content className="mobile-menu-content">
        <VisuallyHidden>
          <DialogPrimitive.Title>Menu</DialogPrimitive.Title>
          <DialogPrimitive.Description>
            Navigate to another part of the website.
          </DialogPrimitive.Description>
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
      </DialogPrimitive.Content>
    </DialogPrimitive.Root>
  );
}

export { links, MobileMenu as default };
