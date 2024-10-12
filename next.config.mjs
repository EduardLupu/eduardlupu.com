/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/eduardlupu.com" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://eduardlupu.com/" : "",
  images:
    process.env.NODE_ENV === "production"
      ? {
          loader: "akamai",
          path: "https://eduardlupu.com/",
        }
      : {},
  output: process.env.NODE_ENV === "production" ? "export" : "standalone",
};

export default nextConfig;
