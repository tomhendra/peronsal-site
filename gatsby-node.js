const path = require('path');

// Generate slugs for blog posts
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

// Generate pages from markdown file blog posts
module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/post.js');
  const res = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (res.errors) {
    reporter.panic('🚨  ERROR: Loading "createPages" query', res.errors);
  }

  const posts = res.data.allMdx.edges;

  posts.forEach(({ node }, index) => {
    createPage({
      component: postTemplate,
      path: `/blog/${node.fields.slug}`,
      context: {
        id: node.id,
      },
    });
  });
};
