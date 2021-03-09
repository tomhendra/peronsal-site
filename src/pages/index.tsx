import { Layout, SEO } from '@components';
import { Styled } from 'theme-ui';

function Home() {
  return (
    <>
      <SEO
        title="Tom Hendra"
        description="Software developer from the UK passionate about code and Spain."
      />
      <Layout>
        <section>
          <Styled.h1>Hello, I am Tom.</Styled.h1>
          <Styled.p>
            I’m a software developer from the UK currently located in sunny
            Spain.
          </Styled.p>
          <Styled.p>
            I perpetually learn, build web apps and write about what I discover.
          </Styled.p>
          <Styled.p>
            If you&#39;re here to reach out, please send me an{' '}
            <Styled.a href="mailto:hola@tomhendra.dev">email</Styled.a> or find
            me on{' '}
            <Styled.a href="https://twitter.com/tomhendra">Twitter</Styled.a>.
          </Styled.p>
        </section>
        <section>
          <Styled.h2>Latest Posts</Styled.h2>
        </section>
      </Layout>
    </>
  );
}

export default Home;
