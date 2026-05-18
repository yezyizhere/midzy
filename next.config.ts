import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore: Next.js 15+ allows this, but types might lag
  allowedDevOrigins: ["192.168.0.3"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "cdnimg.melon.co.kr",
      },
    ],
  },
};

export default nextConfig;