import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /** Keeps Turbopack rooted to this app on Vercel / CI when other lockfiles exist on the machine. */
  turbopack: {
    root: path.join(process.cwd()),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
