export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'animatedImage',
      title: 'AnimatedImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'githubUrl',
      title: 'GithubUrl',
      type: 'url',
    },
    {
      name: 'updated_at',
      title: 'Updated_at',
      type: 'datetime',
    },
    {
      name: 'liveUrl',
      title: 'LiveUrl',
      type: 'url',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skills' } }],
    },
  ],
}
