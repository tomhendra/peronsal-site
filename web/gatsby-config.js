require('dotenv').config({ path: '.env' });

const path = require('path');
const sanityConfig = require('./sanity-config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'Tom Hendra',
    description: 'Portfolio website for Tom Hendra, web developer.',
    author: 'Tom Hendra',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/#gatsby-plugin-google-analytics
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/studio/**'],
        pageTransitionDelay: 0,
        // optimizeId: process.env.GOOGLE_OPTIMIZE_TRACKING_ID,
        // experimentId: process.env.GOOGLE_EXPERIMENT_ID,
        // variationId: process.env.GOOGLE_OPTIMIZE_VARIATION_ID,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'tomhendra.dev',
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
        icon: 'src/assets/images/logo/tomhendra-logo-no-bg-64.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
