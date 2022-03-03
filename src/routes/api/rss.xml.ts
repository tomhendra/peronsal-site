import type {Post, RSSResponse} from '$lib/types';

import {getPosts} from '$lib/utils';

export const get = async (): Promise<RSSResponse> => {
  const data = await getPosts();

  const body: string = render(data);
  const headers = {
    'Cache-Control': `max-age=0, s-maxage=3600`,
    'Content-Type': 'application/xml',
  };
  return {
    status: 200,
    body,
    headers,
  };
};

const render = (
  posts: Post[],
): string => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Tom Hendra</title>
<description>Tom Hendra</description>
<link>https://tomhendra.dev</link>
<atom:link href="https://tomhendra.dev/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    post => `<item>
<guid isPermaLink="true">https://tomhendra.dev/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://tomhendra.dev/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`,
  )
  .join('')}
</channel>
</rss>
`;
