const path = require('path');
require('dotenv').config({ path: `./.env/.env.dev` });

module.exports = {
  siteMetadata: {
    title: 'Tom Hendra',
    description: 'Portfolio website for Tom Hendra, web developer.',
    author: 'Tom Hendra',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'xm39xo8g',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.SANITY_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'tom-hendra-portfolio',
        short_name: 'tom-hendra',
        start_url: '/',
        background_color: '#1F2933',
        theme_color: '#1F2933',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo/tomhendra-icon.png',
      },
    },
    // PWA: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
