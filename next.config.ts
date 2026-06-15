import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      // Google review author profile photos
      { protocol: "https", hostname: "*.googleusercontent.com" },
      { protocol: "https", hostname: "places.googleapis.com" },
    ],
  },
};

export default nextConfig;
