const path = require('path');

// Generate pages from markdown file blog posts
module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('🚨  ERROR: Loading "createPages" query', result.errors);
  }

  const posts = result.data.allContentfulBlogPost.edges;

  posts.forEach(({ node }, index) => {
    createPage({
      component: path.resolve('./src/templates/post.js'),
      path: `/blog/${node.slug}`,
      context: {
        id: node.id,
      },
    });
  });
};

// OLD CODE FOR GENERATING SLUGS USING MDX.......................................
// Generate slugs for blog posts
// const { createFilePath } = require('gatsby-source-filesystem');
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   // We only want to operate on `Mdx` nodes. If we had content from a
//   // remote CMS we could also check to see if the parent node was a
//   // `File` node here
//   if (node.internal.type === 'Mdx') {
//     const value = createFilePath({ node, getNode });

//     createNodeField({
//       // Name of the field you are adding
//       name: 'slug',
//       // Individual MDX node
//       node,
//       // Generated value based on filepath with "blog" prefix. We
//       // don't need a separating "/" before the value because
//       // createFilePath returns a path with the leading "/".
//       value: `/blog${value}`,
//     });
//   }
// };
