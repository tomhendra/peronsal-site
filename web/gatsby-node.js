const path = require('path')

// Generate pages from markdown file blog posts
module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
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
  `)

  if (result.errors) {
    reporter.panic('🚨  ERROR: Loading "createPages" query', result.errors)
  }

  const posts = result.data.allContentfulBlogPost.edges

  posts.forEach(({ node }, index) => {
    createPage({
      component: path.resolve('./src/templates/post.js'),
      path: `/blog/${node.slug}`,
      context: {
        id: node.id
      }
    })
  })
}
