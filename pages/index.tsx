/** @jsxImportSource theme-ui */
import { Layout, SEO } from '@components';
import { Box, Text } from 'theme-ui';

export default function Index() {
  return (
    <>
      <SEO
        title="Tom Hendra"
        description="Software developer from the UK passionate about code and Spain."
      />
      <Layout>
        <Box>
          <Text>
            Hello from Theme UI components! If you see this message things are
            working.
          </Text>
        </Box>
      </Layout>
    </>
  );
}
