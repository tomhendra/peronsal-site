/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Graphic from '../components/Graphic';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Text from '../components/Text';
import BlogPostPreview from '../components/BlogPostPreview';

import usePosts from '../hooks/usePosts';

import { sizes } from '../assets/styles/style-enums';

const { FOXTROT, GOLF, HOTEL, INDIA } = sizes;

function BlogPage() {
  const posts = usePosts();
  return (
    <Layout>
      <SEO title="Blog" />
      <Section>
        <Graphic>Blog</Graphic>
        <Grid withoutBottomSpacing>
          <Item
            gridColStart={1}
            gridColEnd={[8, 6, 7, 7]}
            spacingTop={[GOLF, INDIA]}
            spacingBottom={[GOLF, HOTEL]}
          >
            <Heading as="h1" size={FOXTROT}>
              Blog.
            </Heading>
            <Text noMargin>
              Welcome to a mishmash of ramblings about all of my passions; tech,
              food, fitness and travel. I hope you find it useful, or at least a
              little interesting.
            </Text>
          </Item>
        </Grid>
        <Grid withRowGaps>
          {posts.length ? (
            posts.map(post => (
              <Item gridColSpan={[8, 4, 4, 4]} key={post.id}>
                <BlogPostPreview post={post} />
              </Item>
            ))
          ) : (
            <Item
              gridColStart={1}
              gridColEnd={8}
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
      </Section>
    </Layout>
  );
}

export default BlogPage;
