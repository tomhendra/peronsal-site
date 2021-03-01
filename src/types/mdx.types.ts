export interface MdxPath {
  filepath: string;
  slug: string;
}

export interface MdxContent extends MdxPath {
  hash: string;
  content: string;
  url: string;
  readingTime: string;
  mdx: string;
}

export interface MdxBlogPost extends MdxContent {
  data: {
    title: string;
    date: string;
    excerpt: string;
    author: string;
    image: string;
    caption: string;
    categories: string[];
  };
}

export interface MdxProject extends MdxContent {
  data: {
    title: string;
    date: string;
    excerpt: string;
    image: string;
    caption: string;
    categories: string[];
    repo: string;
    live: string;
  };
}

export interface MdxPage extends MdxContent {
  data: {
    title: string;
    excerpt: string;
  };
}
