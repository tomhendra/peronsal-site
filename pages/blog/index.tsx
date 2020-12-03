/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';
import { useState } from 'react';
import { BLOG_CONTENT_PATH } from '@config';
import { getMdxContent } from '@utils';
import { BlogPostPreview, Layout, SEO, Search } from '@components';

export default function BlogPage({ allMdx }) {
  const [filteredBlogs, setFilteredBlogs] = useState(allMdx);

  const handleFilter = (data) => {
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
          {filteredBlogs?.map((blog) => (
            <BlogPostPreview key={blog.slug} blog={blog} />
          ))}
        </Flex>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
  const allMdx = posts.map((post) => ({
    slug: post.slug,
    ...post.data,
  }));

  return {
    props: {
      allMdx,
    },
  };
}
