import { ExternalLink } from "react-feather";
import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./social-card.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function SocialLink({
  className,
  href,
  children,
}: {
  className: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function SocialCard({
  icon,
  platform,
  username,
  url,
}: {
  icon: React.ReactNode;
  platform: string;
  username: string;
  url: string;
}) {
  return (
    <div className="social-card">
      <SocialLink href={url} className="icon">
        {icon}
      </SocialLink>
      <SocialLink href={url} className="platform">
        {platform} <ExternalLink size={15} />
      </SocialLink>
      <SocialLink href={url} className="username">
        {username}
      </SocialLink>
    </div>
  );
}

export { links, SocialCard as default };
