import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./feature-icon.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

type BaseProps = {
  padding?: string;
  outerPadding?: string;
  double?: boolean;
  children: React.ReactNode;
};

type FeatureIconProps = BaseProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseProps>;

function FeatureIcon({
  outerPadding = "var(--space-2)",
  padding = "var(--space-2)",
  double = false,
  children,
  ...rest
}: FeatureIconProps) {
  if (double) {
    return (
      <div
        className="feature-icon-outer-wrapper"
        style={
          {
            "--outer-padding": outerPadding,
          } as React.CSSProperties
        }
        {...rest}
      >
        <div
          className="feature-icon-wrapper"
          style={{ "--padding": padding } as React.CSSProperties}
        >
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="feature-icon-wrapper"
        style={{ "--padding": padding } as React.CSSProperties}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export { links, FeatureIcon as default };
