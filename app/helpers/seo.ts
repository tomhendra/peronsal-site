import {initSeo} from 'remix-seo';

export const {getSeo, getSeoMeta, getSeoLinks} = initSeo({
  title: 'Tom Hendra',
  titleTemplate: '%s | Tom Hendra',
  description: 'Software developer for the web.',
  twitter: {
    card: 'summary',
    creator: '@tomhendra',
    site: 'https://tomhendra.com',
    title: 'Tom Hendra',
    description: 'Software developer for the web.',
  },
});
