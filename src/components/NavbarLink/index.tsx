import NextLink from 'next/link';
import { NavLink } from 'theme-ui';

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavbarLink({
  href,
  children,
  ...props
}: NavbarLinkProps): React.ReactElement {
  return (
    <NextLink href={href} passHref>
      <NavLink {...props}>{children}</NavLink>
    </NextLink>
  );
}
