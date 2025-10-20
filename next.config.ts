import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Cloudflare Pages specific optimizations
  distDir: 'out',
  // Ensure proper asset paths for Cloudflare Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://rohitlokhande.in' : '',
  // Disable server-side features for static export
};

export default nextConfig;
