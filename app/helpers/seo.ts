import {initSeo} from 'remix-seo';

export const {getSeo, getSeoMeta, getSeoLinks} = initSeo({
  title: 'Tom Hendra',
  description: 'Software developer building for the web.',
  openGraph: {
    siteName: "Tom Hendra's personal website",
    title: 'Tom Hendra',
    description: 'Software developer building for the web.',
    type: 'website',
    url: 'https://tomhendra.com',
    images: [
      {
        url: 'https://res.cloudinary.com/tomhendra/image/upload/v1657112058/personal-site/open-graph-card.png',
        secureUrl:
          'https://res.cloudinary.com/tomhendra/image/upload/v1657112058/personal-site/open-graph-card.png',
        alt: 'Stylised cute robot logo with an introduction: Tom Hendra, Software developer, @tomhendra and tomhendra.com',
        height: 1280,
        width: 2560,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tomhendra',
    title: 'Tom Hendra',
    description: 'Software developer building for the web.',
  },
});
