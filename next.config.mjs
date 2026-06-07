/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/plex',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
