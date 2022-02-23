export interface Post {
  path: string;
  meta: {
    title: string;
    date: string;
    description: string;
    categories: string[];
    coverImage: string;
    alt: string;
    credit: string;
  };
}
