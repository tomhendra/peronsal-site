/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';
import { useState } from 'react';
import { POST_CONTENT_PATH, getMdxContent } from '@utils';
import { BlogPostPreview, Layout, SEO, Search } from '@components';

function Blog({ allMdx }) {
  const [filteredBlogs, setFilteredBlogs] = useState(allMdx);

  const handleFilter = data => {
    setFilteredBlogs(data);
  };

  return (
    <>
      <SEO
        title="Blog"
        description="Tom Hendra's blog about all things tech and food."
      />
      <Layout>
        <Search blogs={allMdx} handleFilter={handleFilter} />
        <Flex sx={{ flexDirection: 'column' }}>
          {filteredBlogs?.map(blog => (
            <BlogPostPreview key={blog.slug} blog={blog} />
          ))}
        </Flex>
      </Layout>
    </>
  );
}

/*
 * Essentially, getStaticProps allows you to tell Next.js:
 * “Hey, this page has some data dependencies - so when you pre-render this page at build time, make sure to resolve them first!”
 */

export async function getStaticProps() {
  const posts = await getMdxContent(POST_CONTENT_PATH);
  const allMdx = posts.map(post => ({
    slug: post.slug,
    ...post.data,
  }));

  return {
    props: {
      allMdx,
    },
  };
}

export default Blog;
