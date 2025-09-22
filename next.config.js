import { getAllContentPaths } from './lib/content';

const eventData = getAllContentPaths('_events');
const audioData = getAllContentPaths('_audio');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
  assetPrefix: './',
  cleanDistDir: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (cfg) => {
    // Add the rule for frontmatter-markdown-loader
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
    eventData.forEach((event) => {
      paths[`/events/${event.slug}`] = {
        page: '/events/[slug]', // Correct path to your dynamic page file
        query: { slug: event.slug },
      };
    });
    audioData.forEach((item) => {
      paths[`/audio/${item.slug}`] = {
        page: '/audio/[slug]', // Correct path to your dynamic page file
        query: { slug: item.slug },
      };
    });

    return paths;
  },
};

export default nextConfig;
