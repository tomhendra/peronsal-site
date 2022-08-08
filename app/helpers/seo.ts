import {initSeo} from 'remix-seo';

export const {getSeo, getSeoMeta, getSeoLinks} = initSeo({
  title: 'Tom Hendra',
  description: 'A technical blog for developers.',
  openGraph: {
    siteName: 'Tom Hendra',
    title: 'Tom Hendra',
    description: 'A technical blog for developers.',
    type: 'website',
    url: 'https://tomhendra.dev',
    images: [
      {
        url: 'https://res.cloudinary.com/tomhendra/image/upload/v1659947804/blog/open-graph-card-blog-default.png',
        secureUrl:
          'https://res.cloudinary.com/tomhendra/image/upload/v1659947804/blog/open-graph-card-blog-default.png',
        alt: 'Stylised cute robot logo with an introduction: Tom Hendra, A technical blog for developers, @tomhendra and tomhendra.dev',
        height: 1920,
        width: 3840,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tomhendra',
    title: 'Tom Hendra',
    description: 'A technical blog for developers.',
  },
});
