/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true,
  },
  async redirects() {
    return [
      {
        source: "/nomads",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
