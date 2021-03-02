export type Mdx = string;

export interface PostData {
  title?: string;
  date?: string;
  excerpt?: string;
  author?: string;
  image?: string;
  caption?: string;
  tags?: string[];
}

export interface PostPreview extends PostData {
  slug: string;
}

export interface MdxContent {
  filepath: string;
  slug: string;
  content: string;
  mdx: Mdx;
  data: PostData;
}
