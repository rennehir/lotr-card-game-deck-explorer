/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ringsdb.com",
        pathname: "/bundles/cards/**",
      },
    ],
  },
};

export default nextConfig;
