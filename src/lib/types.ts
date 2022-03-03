export interface Post {
  alt: string;
  categories?: string | string[];
  caption: string;
  coverImage: string;
  coverHeight?: number;
  coverWidth?: number;
  date: string;
  excerpt: string;
  slug: string;
  subtitle: string;
  title: string;
  updated?: string;
}

export interface APIResponse {
  status: number;
  body: {
    posts?: Post[];
    total?: number;
    error?: string;
  };
}

export interface PostsEndpointOptions {
  offset?: number;
  limit?: number;
  category?: string;
}

export interface RSSResponse {
  status: number;
  body: string;
  headers: {
    'Cache-Control': string;
    'Content-Type': string;
  };
}

export interface contactFormSubmission {
  from_page: string;
  name: string;
  email: string;
  message: string;
}
