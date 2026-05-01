import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Biar jadi file statis (HTML/CSS/JS)
  basePath: '/periodik-table', // Sesuaikan sama nama repo lo
  images: {
    unoptimized: true, // GitHub Pages nggak dukung optimasi gambar bawaan Next.js
  },
};

export default nextConfig;
