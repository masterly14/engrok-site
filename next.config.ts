import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['assets.aceternity.com'],
  },
  eslint: {
    // Desactiva la comprobación de ESLint durante la compilación de Next.js
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
