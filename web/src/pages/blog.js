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
import BlogPostPreview from '../components/BlogPostPreview';

import usePosts from '../hooks/usePosts';

import { sizes } from '../assets/styles/constants';

const { FOXTROT, GOLF, HOTEL, INDIA } = sizes;

function BlogPage() {
  const posts = usePosts();
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <Graphic>Blog</Graphic>
        <Grid withoutBottomSpacing>
          <Item
            gridStart={1}
            gridEnd={[8, 6, 7, 7]}
            spacingTop={[GOLF, INDIA]}
            spacingBottom={[GOLF, HOTEL]}
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
          {posts.length ? (
            posts.map(post => (
              <Item gridSpan={[8, 4, 4, 4]} key={post.id}>
                <BlogPostPreview post={post} />
              </Item>
            ))
          ) : (
            <Item
              gridStart={1}
              gridEnd={8}
              spacingTop={GOLF}
              spacingBottom={GOLF}
            >
              <Heading sub>
                There are currently no posts to display. Please check back soon
                once I have upped my blogging game!
              </Heading>
            </Item>
          )}
        </Grid>
      </Container>
    </Layout>
  );
}

export default BlogPage;
