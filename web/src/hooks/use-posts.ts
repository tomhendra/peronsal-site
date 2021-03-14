import { graphql, useStaticQuery } from 'gatsby';

import { BlogPostHookQuery, BlogPostHookData } from 'types';

export function usePosts(): BlogPostHookData[] {
  const data = useStaticQuery(graphql`
    query {
      posts: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            _id
            title
            publishedAt(formatString: "Do MMMM, YYYY")
            mainImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
              alt
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  return data.posts.edges.map(
    ({ node }: { node: BlogPostHookQuery }) =>
      node && {
        id: node._id,
        title: node.title,
        slug: `/blog/${node.slug.current}`,
        publishedAt: node.publishedAt,
        mainImage: node.mainImage.asset.fluid,
        alt: node.mainImage.alt,
      },
  );
}
