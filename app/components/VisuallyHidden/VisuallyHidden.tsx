import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./styles.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface Props {
  children: React.ReactNode;
}

function VisuallyHidden({ children }: Props) {
  return <span className="visually-hidden">{children}</span>;
}

export { links, VisuallyHidden as default };
