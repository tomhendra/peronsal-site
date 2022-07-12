export type File = {
  path: 'string';
  sha: string;
};

export type PostPaths = {
  files: Array<File>;
  sha: string;
};

export type PostAttributes = {
  sha: string;
  date: Date;
  updated: Date;
  title: string;
  subtitle: string;
  description: string;
  tags: Array<string>;
};

export type Post = {
  attributes: PostAttributes;
  html: string;
};
