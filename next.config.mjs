/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Kaneh-s--Lencho-s--portifolio",
  assetPrefix: "/Kaneh-s--Lencho-s--portifolio/",
  images: {
    unoptimized: true, // Fixes image loading issues
  },
};

export default nextConfig;
