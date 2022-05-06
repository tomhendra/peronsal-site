import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";
import styles from "./Button.styles.css";
import clsx from "clsx";

const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

interface ButtonProps extends React.HTMLAttributes<any> {
  size: "sm" | "md" | "lg" | "xl" | "xxl";
  variant:
    | "primary"
    | "secondary"
    | "secondary-gray"
    | "tertiary"
    | "tertiary-gray"
    | "link"
    | "link-gray";
  mood?: "destructive";
  href?: string;
  to?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

function Button({
  size,
  variant,
  mood,
  href,
  to,
  disabled,
  children,
  ...rest // forward className for one-off variants e.g. Xmas / Halloween
}: ButtonProps) {
  if ((href && disabled) || (to && disabled)) {
    throw new Error(
      `The disabled property cannot be used alongside the 'href' or 'to' attributes. 
       Disabled is not supported by anchor elements or React Router's Link component.`
    );
  }

  const classNames = clsx("btn", size, variant, mood && mood);

  return to ? (
    <Link to={to} className={classNames} {...rest}>
      {children}
    </Link>
  ) : href ? (
    <a href={href} className={classNames} {...rest}>
      {children}
    </a>
  ) : (
    <button className={classNames} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

export { links, Button as default };
