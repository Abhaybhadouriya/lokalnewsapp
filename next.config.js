/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEWSAPI_API: process.env.NEWSAPI_API,
  },
}

module.exports = nextConfig
