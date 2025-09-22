/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },

  webpack: (config, { webpack }) => {
    // Required patch for internal compilation issues with Node globals
    config.plugins.push(
      new webpack.ProvidePlugin({
        __dirname: '__dirname',
        __filename: '__filename',
      })
    );

    // Custom markdown loader
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
