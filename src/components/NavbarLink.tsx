/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { NavLink } from 'theme-ui';

export interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavbarLink({ href, children, ...props }: NavbarLinkProps) {
  return (
    <Link href={href} passHref>
      <NavLink {...props}>{children}</NavLink>
    </Link>
  );
}
