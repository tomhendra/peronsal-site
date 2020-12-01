import { promises as fs } from 'fs';
import renderToString from 'next-mdx-remote/render-to-string';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import hasha from 'hasha';

import { MdxContent } from 'types';
import { MdxComponents } from '@components';
import config from '@config';
import { MdxCache, formatDate, getMdxPaths, sortMdxContent } from '@utils';

export async function getMdxContent(
  source: string,
  slugs?: string[],
  basePath?: string
): Promise<MdxContent[]> {
  const mdxPaths = (await getMdxPaths(source)).filter((mdxPath) =>
    slugs ? slugs.includes(mdxPath.slug) : true
  );

  if (!mdxPaths.length) return [];

  const mdxContent = await Promise.all(
    mdxPaths.map(async (mdxPath) => {
      const raw = await fs.readFile(mdxPath.filepath, 'utf-8');
      const hash = hasha(raw.toString());

      const cachedContent = MdxCache.get<MdxContent>(hash);
      if (cachedContent && cachedContent.hash === hash) {
        return cachedContent;
      }

      const { content, data } = matter(raw);
      const mdx = await renderToString(content, {
        components: MdxComponents,
        mdxOptions: config.mdx.options,
        scope: data,
      });

      const mdxContent: MdxContent = {
        ...mdxPath,
        url: `${basePath}/${mdxPath.slug}`,
        hash,
        content,
        readingTime: readingTime(content).text,
        mdx,
        data: {
          ...data,
          date: formatDate(data.date),
        },
      };

      MdxCache.set<MdxContent>(hash, mdxContent);

      return mdxContent;
    })
  );

  return sortMdxContent(mdxContent, 'date');
}
