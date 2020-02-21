/* eslint-disable max-len */
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Text from '../components/Text';
import BlogPostPreview from '../components/BlogPostPreview';

import usePosts from '../hooks/usePosts';

import { sizes, variants } from '../assets/styles/style-enums';

const { FOXTROT, GOLF, HOTEL } = sizes;
const { SECONDARY } = variants;

function BlogPage() {
  const posts = usePosts();
  return (
    <Layout>
      <SEO title="Blog" />
      <Section fullViewportHeight variant={SECONDARY}>
        <Grid withoutBottomSpacing>
          <Item gridColStart={1} gridColEnd={[9, 8, 9, 8, 6]}>
            <Heading as="h1" size={FOXTROT} variant={SECONDARY}>
              Blog.
            </Heading>
            {posts.length > 0 && (
              <Text noMargin variant={SECONDARY}>
                Welcome to a mishmash of ramblings about all of my passions;
                tech, food, fitness and travel. I hope you find it useful, or at
                least a little interesting.
              </Text>
            )}
          </Item>
        </Grid>
        <Grid withRowGaps>
          {posts.length ? (
            posts.map(post => (
              <Item
                gridColSpan={[8, 4, 6, 4, 4]}
                key={post.id}
                spacingTop={HOTEL}
              >
                <BlogPostPreview post={post} />
              </Item>
            ))
          ) : (
            <Item
              gridColStart={1}
              gridColEnd={[9, 8, 10, 8, 6]}
              spacingBottom={GOLF}
            >
              <Text variant={SECONDARY}>
                There are currently no posts to display. Please check back soon
                once I have upped my blogging game. SMH!
              </Text>
            </Item>
          )}
        </Grid>
      </Section>
    </Layout>
  );
}

export default BlogPage;
