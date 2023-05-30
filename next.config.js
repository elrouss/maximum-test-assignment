/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // The next/image Image Optimization below is completely disabled
    // This avoids having to use a third-party provider to optimize the image when using next/export
    images: {
      unoptimized: true,
    },
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photobank.maximum.expert',
        port: '',
        pathname: '/photo/**',
      },
    ],
  },
};

module.exports = nextConfig;
