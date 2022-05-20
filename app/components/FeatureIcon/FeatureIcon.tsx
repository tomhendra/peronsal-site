import clsx from "clsx";
import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./feature-icon.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

type BaseProps = {
  color?: string;
  padding?: string;
  className?: string;
  children: React.ReactNode;
};

type FeatureIconProps = BaseProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseProps>;

function FeatureIcon({
  color = "var(--color-highlight)",
  padding = "var(--space-2)",
  className,
  children,
  ...rest
}: FeatureIconProps) {
  return (
    <div
      className={clsx("feature-icon-wrapper", className && className)}
      style={{ "--color": color, "--padding": padding } as React.CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
}

export { links, FeatureIcon as default };
