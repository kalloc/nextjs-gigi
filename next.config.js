/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/:path*', // automatically handles all locales
        destination: 'https://httpbin.org/:path*', // automatically passes the locale on
      },
    ]
  },
}

module.exports = nextConfig
