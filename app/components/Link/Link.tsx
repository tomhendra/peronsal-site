import { Link as LinkPrimitive } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";
import styles from "./button.css";
import clsx from "clsx";

const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size: "sm" | "md" | "lg" | "xl" | "xxl";
  variant: "primary" | "gray";
  mood?: "destructive";
  href?: string;
  to?: string;
  children: React.ReactNode;
}

function Link({ size, variant, mood, href, to, children, ...rest }: LinkProps) {
  const classNames = clsx("link", size, variant, mood && mood);

  if (to) {
    return (
      <LinkPrimitive to={to} className={classNames} {...rest}>
        {children}
      </LinkPrimitive>
    );
  } else if (href) {
    return (
      <a href={href} className={classNames} {...rest}>
        {children}
      </a>
    );
  } else {
    throw new Error(
      'Either the "to" or "href" property must be provided for the Link component.'
    );
  }
}

export { links, Link as default };
