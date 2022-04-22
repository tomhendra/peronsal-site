import React from "react";
import { Menu } from "react-feather";
import VisuallyHidden from "~/components/VisuallyHidden";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as visuallyHiddenStyles } from "~/components/VisuallyHidden";
import styles from "./styles.css";

const links: LinksFunction = () => [
  ...visuallyHiddenStyles(),
  { rel: "stylesheet", href: styles },
];

interface Props {
  toggleMenu: () => void;
}

const MobileMenuButton = React.forwardRef(
  ({ toggleMenu }: Props, ref: React.Ref<HTMLButtonElement> | null) => {
    return (
      <button ref={ref} onClick={toggleMenu} className="mobile-menu-button">
        <Menu />
        <VisuallyHidden>Open and close the mobile menu</VisuallyHidden>
      </button>
    );
  }
);

MobileMenuButton.displayName = "MobileMenuButton";

export { links, MobileMenuButton as default };
