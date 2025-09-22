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
  target: 'serverless',
  distDir: 'out',
  generateBuildId: async () => 'static-build',
};
