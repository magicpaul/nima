/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },

  // Note: The structure requires { webpack } from the context object.
  webpack: (config, { webpack }) => {
    // This is the essential fix for '__dirname' errors in dependencies
    config.plugins.push(
      new webpack.ProvidePlugin({
        __dirname: '__dirname',
        __filename: '__filename',
      })
    );

    // Your custom loader
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
