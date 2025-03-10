/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true, // Fixes image loading issues
  },
};

export default nextConfig;
