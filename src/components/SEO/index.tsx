import { NextSeo } from 'next-seo';

interface SeoProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SeoProps): React.ReactElement {
  return <NextSeo title={title} description={description} />;
}
