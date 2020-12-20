/** @jsxImportSource theme-ui */
import NextLink from 'next/link';
import { NavLink } from 'theme-ui';

export interface Props {
  href: string;
  children: React.ReactNode;
}

export function NavbarLink({
  href,
  children,
  ...props
}: Props): React.ReactElement {
  return (
    <NextLink href={href} passHref>
      <NavLink {...props}>{children}</NavLink>
    </NextLink>
  );
}
