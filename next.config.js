/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['asserts.example.com'],
    // Disable image optimization for static export

    unoptimized: true,
  },
  output: 'export',
  // Optional: Add trailing slash to URLs
  trailingSlash: true,
  // Optional: Configure base path if deploying to a subdirectory
  // basePath: '/your-subdirectory',

  // Optional: Configure asset prefix for CDN
  // assetPrefix: 'https://your-cdn.com',

  // Ensure no server-side features are used
  eslint: {
    ignoreDuringBuilds: true, // Optional: skip ESLint during build
  },
}
