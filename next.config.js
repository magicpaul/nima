module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });
    return cfg;
  },
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
};
