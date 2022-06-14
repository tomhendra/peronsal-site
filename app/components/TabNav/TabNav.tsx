import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ArrowRight } from "react-feather";
import Link from "~/components/Link";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as linkLinks } from "~/components/Link";
import styles from "./tab-nav.css";
import clsx from "clsx";

const links: LinksFunction = () => [
  ...linkLinks(),
  { rel: "stylesheet", href: styles },
];

type BaseProps = { children: React.ReactNode; className?: string };

function TabHeading({ children, className, ...rest }: BaseProps) {
  return (
    <span className={clsx("tab-title", className && className)} {...rest}>
      {children}
    </span>
  );
}

function TabSubheading({ children, className, ...rest }: BaseProps) {
  return (
    <span className={clsx("tab-subtitle", className && className)} {...rest}>
      {children}
    </span>
  );
}

function TabLink({
  to,
  children,
  className,
  ...rest
}: BaseProps & { to: string }) {
  return (
    <Link
      to={to}
      className={clsx("tab-link", className && className)}
      {...rest}
    >
      {children}
      <ArrowRight size={20} color="var(--color-primary-text)" />
    </Link>
  );
}

function Tabs({
  defaultValue,
  children,
  className,
  ...rest
}: BaseProps & { defaultValue: string }) {
  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      orientation="vertical"
      className={clsx("tabs", className && className)}
      {...rest}
    >
      {children}
    </TabsPrimitive.Root>
  );
}

function TabsList({ children, className, ...rest }: BaseProps) {
  return (
    <TabsPrimitive.List
      className={clsx("tab-list", className && className)}
      {...rest}
    >
      {children}
    </TabsPrimitive.List>
  );
}

function Tab({
  value,
  children,
  className,
  ...rest
}: BaseProps & { value: string }) {
  return (
    <TabsPrimitive.Trigger
      value={value}
      {...rest}
      className={clsx("tab", className && className)}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}

function TabContent({
  value,
  children,
  ...rest
}: BaseProps & { value: string }) {
  return (
    <TabsPrimitive.Content value={value} className="tab-content" {...rest}>
      {children}
    </TabsPrimitive.Content>
  );
}

export {
  links,
  Tabs,
  TabsList,
  Tab,
  TabHeading,
  TabSubheading,
  TabLink,
  TabContent,
};
