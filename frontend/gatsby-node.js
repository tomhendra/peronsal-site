const path = require('path');

// Generate pages from markdown file blog posts
module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            _id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('🚨 ERROR: Loading "createPages" query', result.errors);
  }

  const posts = result.data.allSanityPost.edges;

  posts.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/templates/BlogPostTemplate.js'),
      path: `/blog/${node.slug.current}`,
      context: {
        id: node._id,
      },
    });
  });
};
