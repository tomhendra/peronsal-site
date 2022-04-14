import type { LinksFunction } from "@remix-run/cloudflare";
import styles from "./VisuallyHidden.css";

export const links: LinksFunction = () => [{ rel: "stylsheet", href: styles }];

interface Props {
  children: React.ReactNode;
}

export default function VisuallyHidden({ children }: Props) {
  return <span className="visually-hidden">{children}</span>;
}
