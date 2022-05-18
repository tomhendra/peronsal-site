import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./feature-icon.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function FeatureIcon({
  padding = "var(--space-2)",
  children,
}: {
  padding?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="feature-icon"
      style={{ "--padding": padding } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export { links, FeatureIcon as default };
