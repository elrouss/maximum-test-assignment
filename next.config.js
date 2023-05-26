/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
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
