/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves content from a subdirectory equal to the repo name
  // Add this when deploying to a custom domain or configure correctly for your repo name
  // basePath: '/personal-page',
};

module.exports = nextConfig;