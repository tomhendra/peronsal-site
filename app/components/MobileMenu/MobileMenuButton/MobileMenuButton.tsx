import type { LinksFunction } from "@remix-run/cloudflare";
import React from "react";
import { Menu } from "react-feather";
import VisuallyHidden, {
  links as visuallyHiddenStyles,
} from "~/components/VisuallyHidden";
import styles from "./MobileMenuButton.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...visuallyHiddenStyles(),
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

export default MobileMenuButton;
