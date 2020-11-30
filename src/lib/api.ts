import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH: string = join(process.cwd(), 'posts');

// getPostSlugs returns the list of all mdx files inside the POSTS_PATH directory
export function getPostSlugs(): string[] {
  return (
    fs
      .readdirSync(POSTS_PATH)
      // Only include md(x) files
      .filter((path) => /\.mdx?$/.test(path))
  );
}

export interface BasicPost {
  title: string;
  description: string;
  dateString: string;
  slug: string;
  content: string;
}

export function getPostBySlug(slug: string): BasicPost {
  const slugWithoutExtension = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${slugWithoutExtension}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const { title, date, description } = data;

  return {
    title,
    description,
    dateString: date,
    slug: slugWithoutExtension,
    content,
  };
}

export function getPosts(): BasicPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort(
      (post1, post2) =>
        new Date(post1.dateString).getTime() -
        new Date(post2.dateString).getTime()
    );
  return posts;
}
