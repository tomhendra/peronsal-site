/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Graphic from '../components/Graphic';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Text from '../components/Text';
import PostPreview from '../components/PostPreview';

import usePosts from '../hooks/usePosts';

import { sizes } from '../assets/styles/constants';

const { FOXTROT, HOTEL, INDIA } = sizes;

const BlogPage = () => {
  const posts = usePosts();
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <Graphic>Blog</Graphic>
        <Grid withoutBottomSpacing>
          <Item
            gridStart={1}
            gridEnd={7}
            spacingTop={INDIA}
            spacingBottom={HOTEL}
          >
            <Heading as="h1" size={FOXTROT}>
              Blog.
            </Heading>
            <Text noMargin>
              This blog aims to be a collection of elements from all of my
              passions.
            </Text>
          </Item>
        </Grid>
        <Grid withRowGaps>
          {posts.map(post => (
            <Item gridSpan={4} key={post.id}>
              <PostPreview post={post} />
            </Item>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default BlogPage;
