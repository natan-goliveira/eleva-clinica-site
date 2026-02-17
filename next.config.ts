import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Adicione domínios externos de imagens aqui quando necessário
      // {
      //   protocol: 'https',
      //   hostname: 'exemplo.com',
      //   port: '',
      //   pathname: '/imagens/**',
      // },
    ],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
