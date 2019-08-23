const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Tom Hendra',
    description: 'Portfolio site for Tom Hendra, software developer',
    author: 'Tom Hendra',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'tom-hendra-portfolio',
        short_name: 'tom-hendra',
        start_url: '/',
        background_color: '#1F2933',
        theme_color: '#1F2933',
        display: 'minimal-ui',
        icon: 'src/assets/images/tomhendra-icon.png', // This path is relative to the root of the site.
      },
    },
    // PWA: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
