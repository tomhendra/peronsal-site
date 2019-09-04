import React from 'react';
import { usePosts } from '../hooks/use-posts';
import { Layout } from '../components/layout';
import { SEO } from '../components/utils/seo';

const BlogPage = () => {
  const posts = usePosts();

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog.</h1>
      <h2>Welcome to my blog.</h2>
      <p>A collection of thoughts from a tech-headed foodie.</p>
      <ol>
        {posts.map(post => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default BlogPage;
