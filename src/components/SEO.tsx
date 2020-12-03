import { NextSeo } from 'next-seo';

export function SEO({ title, description }) {
  return <NextSeo title={title} description={description} />;
}
