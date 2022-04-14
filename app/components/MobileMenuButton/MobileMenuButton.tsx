import type { LinksFunction } from "@remix-run/cloudflare";
import { Menu } from "react-feather";
import VisuallyHidden, {
  links as visuallyHiddenStyles,
} from "../VisuallyHidden";
import styles from "./MobileMenuButton.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...visuallyHiddenStyles(),
];

// interface Props {
//   toggleMobileMenu: () => void;
// }

export default function MobileMenuButton() {
  return (
    <button>
      <Menu />
      <VisuallyHidden>Open the mobile menu</VisuallyHidden>
    </button>
  );
}
