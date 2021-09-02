export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'magicpaul/nima',
    branch: 'master',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  logo_url: 'https://demo.serverless.page/img/logo-cms.jpg',
  site_url: 'https://localhost:3000',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'src/content/pages/home.md',
          fields: [
            {
              label: 'Hero Title (White)',
              name: 'hero_title_white',
              widget: 'string',
            },
            {
              label: 'Hero Title (Green)',
              name: 'hero_title_green',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'hero_description',
              widget: 'markdown',
            },
            {
              label: 'Hero Image',
              name: 'hero_image',
              widget: 'image',
            },
            {
              label: 'Call To Action Button Text',
              name: 'hero_cta_text',
              widget: 'string',
            },
            {
              label: 'Call To Action Button URL',
              name: 'hero_cta_url',
              widget: 'string',
            },
            {
              label: 'Feature Title',
              name: 'feature_title',
              widget: 'string',
            },
            {
              label: 'Feature Description Column 1',
              name: 'feature_description1',
              widget: 'string',
            },
            {
              label: 'Feature Description Column 2',
              name: 'feature_description2',
              widget: 'string',
            },
            {
              label: 'Team Title',
              name: 'team_title',
              widget: 'string',
            },
            {
              label: 'Team Description',
              name: 'team_description',
              widget: 'markdown',
            },
          ],
        },
      ],
    },
    {
      name: 'contact',
      label: 'Contact',
      folder: 'src/content/pages/contact.md',
      fields: [
        {
          label: 'Title',
          name: 'team_title',
          widget: 'string',
        },
        {
          label: 'Description',
          name: 'team_description',
          widget: 'markdown',
        },
        {
          label: 'Steering Group Members',
          name: 'team',
          widget: 'list',
          fields: [
            {
              label: 'Name',
              name: 'name',
              widget: 'string',
            },
            {
              label: 'Location',
              name: 'description',
              widget: 'text',
            },
            {
              label: 'Position',
              name: 'position',
              widget: 'string',
            },
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
            },
          ],
        },
      ],
    },
    {
      name: 'events',
      label: 'Events',
      folder: 'src/content/_events',
      create: true,
      slug: '{{slug}}',
      preview_path: 'events/{{fields.slug}}',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Subitle',
          name: 'subtitle',
          widget: 'string',
        },
        {
          label: 'Category',
          name: 'category',
          widget: 'string',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
        },
        {
          label: 'Draft',
          name: 'draft',
          widget: 'boolean',
          default: true,
        },
        {
          label: 'Event Date',
          name: 'eventDate',
          widget: 'string',
        },
        {
          label: 'Post Date',
          name: 'postDate',
          widget: 'date',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Event date and time',
          name: 'whenText',
          widget: 'text',
        },
        {
          label: 'Event Costs',
          name: 'costText',
          widget: 'text',
        },
        {
          label: 'Event Map',
          name: 'mapsEmbed',
          widget: 'map',
        },
        {
          label: 'Directions',
          name: 'directions',
          widget: 'text',
        },
        {
          label: 'Speaker One Name',
          name: 'sp1Name',
          widget: 'string',
        },
        {
          label: 'Speaker One Location',
          name: 'sp1Location',
          widget: 'string',
        },
        {
          label: 'Speaker One Bio',
          name: 'sp1Location',
          widget: 'text',
        },
        {
          label: 'Speaker One Image',
          name: 'sp1Img',
          widget: 'image',
        },
        {
          label: 'Speaker One Name',
          name: 'sp2Name',
          widget: 'string',
        },
        {
          label: 'Speaker One Location',
          name: 'sp2Location',
          widget: 'string',
        },
        {
          label: 'Speaker One Bio',
          name: 'sp2Location',
          widget: 'text',
        },
        {
          label: 'Speaker One Image',
          name: 'sp2Img',
          widget: 'image',
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
      ],
    },
  ],
};
