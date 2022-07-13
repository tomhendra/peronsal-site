export type File = {
  path: 'string';
  sha: string;
};

export type FilePaths = {
  files: Array<File>;
  sha: string;
};

export type Attributes = {
  sha: string;
  slug: string;
  date: Date;
  updated: Date;
  title: string;
  subtitle: string;
  description: string;
  tags: Array<string>;
};

export type Article = {
  attributes: Attributes;
  html: string;
};
