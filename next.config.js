/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },

  webpack: (config, { webpack, isServer }) => {
    if (!isServer) {
      config.node = {
        __dirname: false,
      };
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }

    if (isServer) {
      config.externals.push({
        'next/dist/compiled/cookie': 'commonjs next/dist/compiled/cookie',
        'next/dist/compiled/gzip-size': 'commonjs next/dist/compiled/gzip-size',
        'next/dist/compiled/web-vitals/web-vitals':
          'commonjs next/dist/compiled/web-vitals/web-vitals',
      });
    }

    config.plugins.push(
      new webpack.ProvidePlugin({
        __dirname: '__dirname',
        __filename: '__filename',
      })
    );

    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
