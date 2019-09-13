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
            paragraph={`A collection of thoughts from a tech-headed foodie.`}
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
