import { Layout, SEO } from '@components';
import { Box, Text } from 'theme-ui';

function Home(): React.ReactElement {
  return (
    <>
      <SEO
        title="Tom Hendra"
        description="Software developer from the UK passionate about code and Spain."
      />
      <Layout>
        <Box>
          <Text>Hello from Theme UI components!</Text>
          <Text>If you see this message then data is flowing.</Text>
        </Box>
      </Layout>
    </>
  );
}

export default Home;
