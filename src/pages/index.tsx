/** @jsxImportSource theme-ui */
import { Styled } from 'theme-ui';
import { Layout } from '../components/Layout';
import Head from 'next/head';

export const CMS_NAME = 'tomhendra.dev';

export default function Index() {
  return (
    <>
      <Head>
        <title>All Posts | {CMS_NAME}</title>
      </Head>
      <Layout>
        <div
          sx={{
            maxWidth: 'container',
            mx: 'auto',
            mt: 7,
          }}
        >
          <Styled.h1 sx={{ fontSize: 16, mb: 4 }}>
            This is my amazing website.
          </Styled.h1>
          <Styled.p sx={{ fontSize: 3 }}>
            My website has a dark mode and a blog and uses Nextjs. Boom!
          </Styled.p>
        </div>
      </Layout>
    </>
  );
}
