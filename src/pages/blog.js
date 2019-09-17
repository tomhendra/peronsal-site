import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/utils/seo';
import { Container } from '../components/container';
import { PageHeading } from '../components/page-heading';
import { PageText } from '../components/page-text';
import { PostGrid } from '../components/post-grid';

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <PageHeading>
          <PageText
            mainHeading={`Blog.`}
            subHeading={`Welcome to my blog.`}
            paragraph={`When I'm not writing code or designing, I'm either satisfying my obsession with the amazing food in Spain, or lifting heavy things in the gym. This blog aims to be a collection of elements from all of my passions.`}
          />
        </PageHeading>
        <PostGrid />
      </Container>
    </Layout>
  );
};

export default BlogPage;
