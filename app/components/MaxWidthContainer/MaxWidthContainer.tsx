import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./MaxWidthContainer.styles.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function MaxWidthContainer({ children }: { children: React.ReactNode }) {
  return <div className="max-width-container">{children}</div>;
}

export { links, MaxWidthContainer as default };
