import { ExternalLink } from "react-feather";
import Link from "~/components/Link";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as linkLinks } from "~/components/Link";
import styles from "./social-card.css";

const links: LinksFunction = () => [
  ...linkLinks(),
  { rel: "stylesheet", href: styles },
];

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
    <Link as="external" href={href} className={className}>
      {children}
    </Link>
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
