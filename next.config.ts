import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // O domínio de imagens do Sanity
        port: "",
      },
    ],
  },
};

export default nextConfig;
