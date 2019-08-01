import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <p>This is the blog page</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default BlogPage;
