/** @jsxImportSource theme-ui */
import { Container, Flex, Text } from 'theme-ui';
import { Navbar } from '@components';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <header>
      <Navbar />
      <Container as="main" p={6}>
        {children}
      </Container>
      <Flex as="footer" p={4} sx={{ justifyContent: 'center' }}>
        <Text>© {new Date().getFullYear()} Tom Hendra</Text>
      </Flex>
    </header>
  );
}
