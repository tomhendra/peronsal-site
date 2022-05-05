import type { LinksFunction } from "@remix-run/cloudflare";
import clsx from "clsx";
import MaxWidthContainer from "../MaxWidthContainer";

import styles from "./Section.styles.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function Section({
  id,
  primary,
  children,
}: {
  id?: string;
  primary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={clsx(primary && "section-bg-primary")}>
      <MaxWidthContainer>{children}</MaxWidthContainer>
    </section>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <div className="section-intro">{children}</div>;
}

function SectionPrefix({
  alt,
  children,
}: {
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span className={clsx("section-prefix", alt && "-section-prefix-alt")}>
      {children}
    </span>
  );
}

function SectionHeading({
  alt,
  children,
}: {
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <h2 className={clsx("section-heading", alt && "section-heading-alt")}>
      {children}
    </h2>
  );
}

function SectionSubheading({
  alt,
  children,
}: {
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <h3 className={clsx("section-subheading", alt && "section-subheading-alt")}>
      {children}
    </h3>
  );
}

// TODO: NEXT --> look at commonality between layouts and abstract from /routes/index.tsx
function SectionLayout({ children }: { children: React.ReactNode }) {
  return <div className="section-layout">{children}</div>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return <div className="section-content">{children}</div>;
}

export {
  links,
  Section,
  SectionLayout,
  SectionIntro,
  SectionPrefix,
  SectionHeading,
  SectionSubheading,
  SectionContent,
};
