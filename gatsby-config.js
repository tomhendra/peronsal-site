const path = require('path');
require('dotenv').config({ path: `./.env/.env.dev` });

module.exports = {
  siteMetadata: {
    title: 'Tom Hendra',
    description: 'Portfolio website for Tom Hendra, web developer.',
    author: 'Tom Hendra',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'tom-hendra-portfolio',
        short_name: 'tom-hendra',
        start_url: '/',
        background_color: '#1F2933',
        theme_color: '#1F2933',
        display: 'minimal-ui',
        icon: 'src/assets/images/tomhendra-icon.png',
      },
    },
    // PWA: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
