/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: { unoptimized: true },
  },
  basePath: process.env.NODE_ENV === "development" ? "" : "/app",
};

module.exports = nextConfig;
