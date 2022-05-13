import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./icon-wrapper.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function IconWrapper({ children }: { children: React.ReactNode }) {
  return <div className="icon-wrapper">{children}</div>;
}

export { links, IconWrapper as default };
