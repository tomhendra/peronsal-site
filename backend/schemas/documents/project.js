export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'techstack',
      title: 'Technology stack',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'technology' } }],
    },
    {
      name: 'repo',
      title: 'Project repo',
      type: 'url',
    },
    {
      name: 'url',
      title: 'Project live URL',
      type: 'url',
    },
  ],
};
