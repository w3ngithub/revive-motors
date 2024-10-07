/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/revive-motors",
  assetPrefix: "/revive-motors/", // Prefix static assets with the basePath
  images: {
    domains: ["/revive-motors/"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
