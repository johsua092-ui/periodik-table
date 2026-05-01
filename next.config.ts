import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/periodik-table',
  trailingSlash: true, // Nambahin garis miring di akhir URL biar path-nya konsisten di GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
