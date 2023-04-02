/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-ams2-1.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scontent-ams4-1.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
