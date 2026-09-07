/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/printbridge',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
