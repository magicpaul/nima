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
    return defaultPathMap;
  },
  cleanDistDir: true,
};
