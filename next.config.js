const { getAllContentPaths } = require('./src/lib/content');

// --- Fetch Data for exportPathMap ---
const eventData = getAllContentPaths('_events');
const audioData = getAllContentPaths('_audio');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
  assetPrefix: './',
  output: 'export',
  cleanDistDir: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });
    return cfg;
  },
  async exportPathMap(defaultPathMap) {
    const paths = {
      ...defaultPathMap,
    };

    // Generate Paths for Events
    eventData.forEach((event) => {
      paths[`/events/${event.slug}`] = {
        page: '/events/[slug]',
        query: { slug: event.slug },
      };
    });

    // Generate Paths for Audio
    audioData.forEach((item) => {
      paths[`/audio/${item.slug}`] = {
        page: '/audio/[slug]',
        query: { slug: item.slug },
      };
    });

    return paths;
  },
};

module.exports = nextConfig;
