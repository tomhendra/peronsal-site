import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./TabNav.styles.css";
import { ArrowRight } from "react-feather";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function TabHeading({ children, ...rest }: { children: React.ReactNode }) {
  return (
    <span className="tab-title" {...rest}>
      {children}
    </span>
  );
}

function TabSubheading({ children, ...rest }: { children: React.ReactNode }) {
  return (
    <span className="tab-subtitle" {...rest}>
      {children}
    </span>
  );
}

function TabLink({
  to,
  children,
  ...rest
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link to={to} className="tab-link" {...rest}>
      {children}
      <ArrowRight size={20} color="var(--color-primary-text)" />
    </Link>
  );
}

function Tabs({
  defaultValue,
  children,
  ...rest
}: {
  defaultValue: string;
  children: React.ReactNode;
}) {
  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      orientation="vertical"
      className="tabs"
      {...rest}
    >
      {children}
    </TabsPrimitive.Root>
  );
}

function TabsList({ children, ...rest }: { children: React.ReactNode }) {
  return (
    <TabsPrimitive.List className="tab-list" {...rest}>
      {children}
    </TabsPrimitive.List>
  );
}

function Tab({
  value,
  children,
  ...rest
}: {
  value: string;
  children: React.ReactNode;
}) {
  return (
    <TabsPrimitive.Trigger value={value} {...rest} className="tab">
      {children}
    </TabsPrimitive.Trigger>
  );
}

function TabContent({
  value,
  children,
  ...rest
}: {
  value: string;
  children: React.ReactNode;
}) {
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
