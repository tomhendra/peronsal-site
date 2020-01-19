export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: { type: 'author' },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    },
    {
      name: 'mainImage',
      type: 'figure',
      title: 'Main image',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'techstack',
      type: 'array',
      title: 'Technology stack',
      of: [{ type: 'reference', to: { type: 'technology' } }],
    },
    {
      name: 'repo',
      type: 'url',
      title: 'Project repo',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Project live URL',
    },
  ],
  // ordering for display in Sanity studio
  orderings: [
    {
      name: 'publishedAtDesc',
      title: 'Date, Descending',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
