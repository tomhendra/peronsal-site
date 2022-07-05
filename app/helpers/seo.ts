import {initSeo} from 'remix-seo';

export const {getSeo, getSeoMeta, getSeoLinks} = initSeo({
  title: 'Hello',
  titleTemplate: '%s | Tom Hendra',
  description: 'Software developer for the web.',
  openGraph: {
    siteName: "Tom Hendra's personal website",
    title: 'Tom Hendra',
    description: 'Software developer for the web.',
    type: 'website',
    url: 'https://tomhendra.com',
    images: [
      {
        url: 'https://res.cloudinary.com/tomhendra/image/upload/v1657050188/personal-site/open-graph-logo.png',
        secureUrl:
          'https://res.cloudinary.com/tomhendra/image/upload/v1657050188/personal-site/open-graph-logo.png',
        alt: 'Tom Hendra logo - a stylised cute robot',
        height: 1500,
        width: 1500,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    image: {
      url: 'https://res.cloudinary.com/tomhendra/image/upload/v1657051757/personal-site/open-graph-twitter-summary-large.png',
      alt: 'Tom Hendra summary card - a stylised cute robot logo with introduction: Tom Hendra, Frontend Developer, @tomhendra tomhendra.com',
    },
    site: '@tomhendra',
    title: 'Tom Hendra',
    description: 'Software developer for the web.',
  },
});
