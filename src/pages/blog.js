import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/utils/seo';

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog.</h1>
    <h2>Welcome to my blog.</h2>
    <p>A collection of thoughts from a tech-headed foodie.</p>
    <div>blog post</div>
    <div>blog post</div>
    <div>blog post</div>
    <div>blog post</div>
    <div>blog post</div>
    <div>blog post</div>
  </Layout>
);

export default BlogPage;
