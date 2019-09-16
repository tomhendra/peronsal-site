import React from 'react';
import { usePosts } from '../hooks/use-posts';
import { Layout } from '../components/layout';
import { SEO } from '../components/utils/seo';
import { Container } from '../components/container';
import { PageHeading } from '../components/page-heading';
import { PageText } from '../components/page-text';
import { PostPreview } from '../components/post-preview';

const BlogPage = () => {
  const posts = usePosts();

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
        {posts.map(post => (
          <PostPreview key={post.id} post={post} />
        ))}
      </Container>
    </Layout>
  );
};

export default BlogPage;
