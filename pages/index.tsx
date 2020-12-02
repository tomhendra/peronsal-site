/** @jsxImportSource theme-ui */
import { NextSeo } from 'next-seo';
import { Layout } from '@components/Layout';
import { Box, Text } from 'theme-ui';

export default function Index() {
  return (
    <Layout>
      <NextSeo
        title="Tom Hendra"
        description="Software developer from the UK passionate about code and Spain."
      />
      <Box>
        <Text>Hello from Theme UI components!</Text>
      </Box>
    </Layout>
  );
}
