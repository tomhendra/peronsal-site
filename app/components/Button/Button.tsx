import { Link } from "@remix-run/react";
import clsx from "clsx";

import type { LinksFunction } from "@remix-run/cloudflare";
import type { LinkProps } from "@remix-run/react";
import styles from "./button.css";

const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  size: "sm" | "md" | "lg" | "xl" | "xxl";
  variant:
    | "unstyled"
    | "primary"
    | "secondary"
    | "secondary-gray"
    | "tertiary"
    | "tertiary-gray";
  mood?: "destructive";
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
  };

type ButtonAsUnstyled = Omit<ButtonAsButton, "as" | "variant"> & {
  as: "unstyled";
  variant?: BaseProps["variant"];
};

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: "link";
  };

type ButtonAsExternal = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "externalLink";
  };

type ButtonProps =
  | ButtonAsButton
  | ButtonAsExternal
  | ButtonAsLink
  | ButtonAsUnstyled;

function Button(props: ButtonProps) {
  const { size, variant, mood, className, as, children } = props;

  const allClassNames = clsx(
    "btn",
    size,
    variant,
    mood && mood,
    className && className
  );

  if (as === "link") {
    const { ...rest } = props;
    return (
      <Link className={allClassNames} {...rest}>
        {children}
      </Link>
    );
  } else if (as === "externalLink") {
    const { ...rest } = props;
    return (
      <a
        className={allClassNames}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  } else if (as === "unstyled") {
    const { ...rest } = props;
    return (
      <button className={`unstyled ${className}`} {...rest}>
        {children}
      </button>
    );
  } else {
    const { ...rest } = props;
    return (
      <button className={allClassNames} {...rest}>
        {children}
      </button>
    );
  }
}

export { links, Button as default };
