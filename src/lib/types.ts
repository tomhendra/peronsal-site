export interface Post {
  title: string;
  subtitle: string;
  date: string;
  updated?: string;
  coverImage: string;
  // coverImageHeight?: number;
  // coverImageWidth?: number;
  alt: string;
  caption: string;
  tags?: string | string[];
  description: string;
  slug: string;
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
  tag?: string;
}

export interface RSSResponse {
  status: number;
  body: string;
  headers: {
    'Cache-Control': string;
    'Content-Type': string;
  };
}
