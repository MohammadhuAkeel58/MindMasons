import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "www.google.com", // <-- not recommended because Google search URLs are not direct image sources
      "images.pexels.com", // <- preferred real image host
      "cdn.pixabay.com", // <- another common one
    ],
  },
  /* config options here */
};

export default nextConfig;
