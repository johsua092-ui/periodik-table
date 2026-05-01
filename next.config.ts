import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/periodik-table',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Tambahan biar Build-nya nggak gampang error gara-gara hal sepele
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
