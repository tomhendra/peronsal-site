export const metadata = {
  title: 'Blog',
  description: 'Writing by Tom Hendra',
};

export function generateStaticParams() {
  return [{ slug: 'learn-next-js' }];
}
