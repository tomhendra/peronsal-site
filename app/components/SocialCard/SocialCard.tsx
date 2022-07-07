import {ExternalLink} from 'react-feather';
import Link from '~/components/Link';
import VisuallyHidden from '../VisuallyHidden';
import type {LinksFunction} from '@remix-run/cloudflare';

import {links as linkLinks} from '~/components/Link';
import {links as visuallyHiddenLinks} from '~/components/VisuallyHidden';
import styles from './social-card.css';

const links: LinksFunction = () => [
  ...linkLinks(),
  ...visuallyHiddenLinks(),
  {rel: 'stylesheet', href: styles},
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
        <VisuallyHidden>Link to {platform} - icon</VisuallyHidden>
        {icon}
      </SocialLink>
      <SocialLink href={url} className="platform">
        <VisuallyHidden>Link to {platform} - platform name</VisuallyHidden>
        {platform} <ExternalLink size={15} />
      </SocialLink>
      <SocialLink href={url} className="username">
        <VisuallyHidden>Link to {platform} - username</VisuallyHidden>
        {username}
      </SocialLink>
    </div>
  );
}

export {links, SocialCard as default};
