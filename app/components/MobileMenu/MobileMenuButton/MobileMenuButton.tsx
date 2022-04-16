import type { LinksFunction } from "@remix-run/cloudflare";
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
  onClick: () => void;
}

export default function MobileMenuButton({ onClick }: Props) {
  return (
    <button className="mobile-menu-button" onClick={onClick}>
      <Menu />
      <VisuallyHidden>Open and close the mobile menu</VisuallyHidden>
    </button>
  );
}
