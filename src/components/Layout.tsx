/** @jsxImportSource theme-ui */
import { Header } from './Header';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div sx={{ maxWidth: 'container', mx: 'auto', px: 3, py: 3, mb: 8 }}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
