/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "/images/media/meals/**",
      },
    ],
  },
};
module.exports = nextConfig;

// https://www.themealdb.com/images/media/meals/bopa2i1683209167.jpg
