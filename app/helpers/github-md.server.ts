import type {FilePaths, Article} from '~/types';

const repo = 'https://github-md.com/tomhendra/blog-content/main';

export async function getMarkdownPaths(): Promise<FilePaths | undefined> {
  const response = await fetch(repo);
  if (!response.ok || response.status !== 200) {
    if (response.status === 404) {
      return undefined; // not found
    }
    throw Error(
      `Fetching Markdown file paths from GitHub failed with ${response.status}: ${response.statusText}`,
    );
  }
  return response.json();
}

export async function getMarkdownFile(
  path: string,
): Promise<Article | undefined> {
  const response = await fetch(repo + '/' + path);
  if (!response.ok || response.status !== 200) {
    if (response.status === 404) {
      return undefined; // not found
    }
    throw Error(
      `Fetching Markdown file from GitHub failed with ${response.status}: ${response.statusText}`,
    );
  }
  return response.json();
}

export async function getAllMarkdownFiles() {
  const paths = await getMarkdownPaths();
  const posts = paths?.files.map(async file => {
    const {path, sha} = file;
    const slug = path.substring(0, path.lastIndexOf('.'));
    const markdown = await getMarkdownFile(path);

    return {
      attributes: {
        sha,
        slug,
        ...markdown?.attributes,
      },
      html: markdown?.html,
    };
  });

  if (posts) {
    return Promise.all(posts);
  }
}

export async function getAllMarkdownAttributes() {
  const posts = await getAllMarkdownFiles();
  return posts?.map(post => post?.attributes);
}
