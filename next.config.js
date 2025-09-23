/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },

  //use this for live server
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        crypto: false,
      };
      config.node = {
        __dirname: false,
        __filename: false,
      };
    }

    if (isServer) {
      config.externals = [
        /^(?!\.\/|@|~).+\/next\/dist\/.+$/,
        ...config.externals,
      ];
    }

    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });

    return config;
  },

  //use this for local dev
  /*  webpack: (config) => 
      {config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
      });

    return config;
  }, */
};

module.exports = nextConfig;
