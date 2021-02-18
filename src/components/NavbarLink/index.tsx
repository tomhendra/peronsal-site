import NextLink from 'next/link';
import { NavLink } from 'theme-ui';

interface Props {
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
      {/* <a> goes inside Next link: https://nextjs.org/learn/basics/navigate-between-pages/link-component */}
      <NavLink {...props}>{children}</NavLink>
    </NextLink>
  );
}
