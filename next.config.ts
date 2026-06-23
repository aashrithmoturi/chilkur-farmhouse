import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // Serve tiny modern image formats so the page paints instantly while
    // heavier originals are optimised on demand.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    remotePatterns: [
      // Google review author profile photos
      { protocol: "https", hostname: "*.googleusercontent.com" },
      { protocol: "https", hostname: "places.googleapis.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "react-icons"],
  },
};

export default nextConfig;
