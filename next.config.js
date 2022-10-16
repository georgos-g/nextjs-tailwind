/** @type {import('next').NextConfig} */
const urlEnv = process.env.NEXT_PUBLIC_API_ENDPOINT;
// remove https and port from url
const apiUrl = urlEnv.replace(/^https?:\/\//, '').replace(/:\d+/, '');

module.exports = {
  reactStrictMode: true,

  swcMinify: true,
  // SVG
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  // Images
  images: {
    domains: [apiUrl],
  },
};
