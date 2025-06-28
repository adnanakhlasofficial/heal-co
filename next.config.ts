import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all hostnames
      },
      {
        protocol: "http",
        hostname: "**", // Allows all hostnames
      },
    ],
  },
};

export default nextConfig;
