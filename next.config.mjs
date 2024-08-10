/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adityaver.vercel.app',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;