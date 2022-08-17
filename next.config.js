/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["pbs.twimg.com"],
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
