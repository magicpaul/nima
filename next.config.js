module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });
    return cfg;
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  distDir: 'out',
  async exportPathMap(defaultPathMap) {
    const paths = {
      ...defaultPathMap, // Keep static pages like '/', '/404', '/contact', etc.
    };
    eventData.forEach((event) => {
      paths[`/events/${event.slug}`] = {
        page: '/events/[slug]', // Maps to the actual page file in /pages
        query: { slug: event.slug },
      };
    });
    audioData.forEach((item) => {
      paths[`/audio/${item.slug}`] = {
        page: '/audio/[slug]', // Maps to the actual page file in /pages
        query: { slug: item.slug },
      };
    });

    return paths;
  },
  assetPrefix: './',
  cleanDistDir: true,
};
