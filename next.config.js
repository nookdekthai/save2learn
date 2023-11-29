/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'randomuser.me', 'cdn-local.mebmarket.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    reactRoot: true,
    suppressHydrationWarning: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.resolve.alias.canvas = false;
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.SERVER_URI}/api/v1/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
