import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Set to false to disable ESLint during build in production
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
