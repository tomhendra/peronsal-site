/** @jsxImportSource theme-ui */
import NextLink from 'next/link';
import { NavLink } from 'theme-ui';

export interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavbarLink({ href, children, ...props }: NavbarLinkProps) {
  return (
    <NextLink href={href} passHref>
      <NavLink {...props}>{children}</NavLink>
    </NextLink>
  );
}
