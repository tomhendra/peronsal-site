export interface Post {
  path: string;
  meta: {
    title: string;
    date: string;
    description: string;
    categories: string[];
  };
}
