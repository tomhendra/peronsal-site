import type React from 'react';

export type Children = React.ReactNode;

export type File = {
  path: 'string';
  sha: string;
};

export type FilePaths = {
  files: Array<File>;
  sha: string;
};

export type MarkdownAttributes = {
  sha: string;
  slug: string;
  date: Date;
  updated: Date;
  title: string;
  subtitle: string;
  description: string;
  og_image: string;
  tags: Array<string>;
};

export type Markdown = {
  attributes: MarkdownAttributes;
  html: string;
};
