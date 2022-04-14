import type { LinksFunction } from "@remix-run/cloudflare";
import styles from "./ThemeToggle.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function ThemeToggle() {
  return <button>Theme</button>;
}
