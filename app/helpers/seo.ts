import {initSeo} from 'remix-seo';

export const {getSeo, getSeoMeta, getSeoLinks} = initSeo({
  title: 'Hello',
  titleTemplate: '%s | Tom Hendra',
  description: 'Frontend developer building for the web.',
  openGraph: {
    siteName: "Tom Hendra's personal website",
    title: 'Tom Hendra',
    description: 'Frontend developer building for the web.',
    type: 'website',
    url: 'https://tomhendra.com',
    images: [
      {
        url: 'https://res.cloudinary.com/tomhendra/image/upload/v1657101258/personal-site/open-graph-twitter-card-summary-large.png',
        secureUrl:
          'https://res.cloudinary.com/tomhendra/image/upload/v1657101258/personal-site/open-graph-twitter-card-summary-large.png',
        alt: 'Stylised cute robot logo with an introduction: Tom Hendra, Frontend developer, @tomhendra and tomhendra.com',
        height: 640,
        width: 1280,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    image: {
      url: 'https://res.cloudinary.com/tomhendra/image/upload/v1657101258/personal-site/open-graph-twitter-card-summary-large.png',
      alt: 'Tom Hendra twitter summary card featuring a stylised cute robot logo with an introduction: Tom Hendra, Frontend developer, @tomhendra, tomhendra.com',
    },
    site: '@tomhendra',
    title: 'Tom Hendra',
    description: 'Frontend developer building for the web.',
  },
});
