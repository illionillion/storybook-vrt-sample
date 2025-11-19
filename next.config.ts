import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? "docs" : ".next",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/storybook-vrt-sample" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/storybook-vrt-sample" : "",
};

export default nextConfig;
