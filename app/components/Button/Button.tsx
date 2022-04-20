import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";
import styles from "./button.css";

const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

function Button({
  size,
  variant,
  mood,
  href,
  to,
  disabled,
  children,
  ...delegated // forward className for one-off variants e.g. Xmas / Halloween
}: {
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
}) {
  const sizeClass = `btn-${size}`;
  const variantClass = `btn-${variant}`;
  const moodClass = mood ? ` btn-${mood}` : "";
  const classNames = `btn ${sizeClass} ${variantClass}${moodClass}`;

  if ((href && disabled) || (to && disabled)) {
    throw new Error(
      `The disabled property cannot be used alongside the 'href' or 'to' attributes. 
       Disabled is not supported by anchor elements or React Router's Link component.`
    );
  }

  return to ? (
    <Link to={to} className={classNames} {...delegated}>
      {children}
    </Link>
  ) : href ? (
    <a href={href} className={classNames} {...delegated}>
      {children}
    </a>
  ) : (
    <button className={classNames} disabled={disabled} {...delegated}>
      {children}
    </button>
  );
}

export { links, Button as default };
