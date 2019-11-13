export default {
  name: 'technology',
  type: 'document',
  title: 'Technology',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'logo',
      type: 'logo',
      title: 'Logo',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
};
