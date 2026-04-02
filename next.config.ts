import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_BASE_PATH === "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
