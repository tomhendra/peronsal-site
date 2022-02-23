const siteURL = 'https://tomhendra.dev';
const siteTitle = 'Blog | Tom Hendra';
const siteDescription = 'A collection of thoughts and ideas.';

// https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit
// https://scottspence.com/posts/make-an-rss-feed-with-sveltekit
// https://codebeautify.org/xmlviewer

// TODO: extract to util function (used in api/posts.json.ts)
export const get = async () => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('./blog/*.md')).map(
      async ([path, resolver]) => {
        const {metadata} = await resolver();
        const slug = path.slice(2, -3);
        return {...metadata, slug};
      },
    ),
  ).then(posts => {
    return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  });

  const body = render(posts);
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  };

  return {
    body,
    headers,
  };
};

const render = posts =>
  `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    post => `<item>
<guid isPermaLink="true">${siteURL}/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>${siteURL}/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`,
  )
  .join('')}
</channel>
</rss>
`;
