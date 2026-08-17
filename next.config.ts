import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.m?js$/,
      resolve: {
        fullySpecified: false, // CommonJS/ES Module 충돌 방지
      },
    });
    return config;
  },
};

module.exports = nextConfig;

export default nextConfig;
