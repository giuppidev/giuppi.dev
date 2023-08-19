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
      {
        source: "/discord",
        destination: process.env.NEXT_PUBLIC_DISCORD_SERVER,
        permanent: true,
      },
      {
        source: "/fiscozen",
        destination: process.env.NEXT_PUBLIC_FISCOZEN,
        permanent: true,
      },
      {
        source: "/instagram",
        destination: process.env.NEXT_PUBLIC_INSTAGRAM,
        permanent: true,
      },
      {
        source: "/youtube",
        destination: process.env.NEXT_PUBLIC_YOUTUBE,
        permanent: true,
      },
    ];
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
