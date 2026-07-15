import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "substackcdn.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/projects/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
      {
        source: "/services/startup-mvp",
        destination: "/services/workflow-build",
        permanent: true,
      },
      {
        source: "/services/growth-sprint",
        destination: "/services/workflow-build",
        permanent: true,
      },
      {
        source: "/services/launch-site",
        destination: "/agencies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
