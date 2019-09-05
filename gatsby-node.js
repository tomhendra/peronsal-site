const path = require('path');

// Generate slugs for blog posts
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. We
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/blog${value}`,
    });
  }
};

// Generate pages from markdown file blog posts
module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
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
      component: path.resolve('./src/templates/post.js'),
      path: node.fields.slug,
      context: { id: node.id },
    });
  });
};
