import type {PostPaths, Post} from '~/types';

const repo = 'https://github-md.com/tomhendra/blog-content/main';

export async function getMarkdownPaths(): Promise<PostPaths | undefined> {
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

export async function getMarkdownFile(path: string): Promise<Post | undefined> {
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
    const markdown = await getMarkdownFile(file.path);
    return {
      attributes: {
        sha: file.sha,
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
