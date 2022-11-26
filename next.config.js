/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "i.ibb.co",
      "img.icons8.com",
      "images.unsplash.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
};

module.exports = nextConfig;
