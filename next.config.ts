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
        source: "/cv",
        destination: "/Joseph_Harwood_CV.pdf",
        permanent: false,
      },
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
        destination: "/services/ai-prototype",
        permanent: true,
      },
      {
        source: "/services/growth-sprint",
        destination: "/services/ai-feature-launch",
        permanent: true,
      },
      {
        source: "/services/workflow-review",
        destination: "/services/ai-prototype",
        permanent: true,
      },
      {
        source: "/services/workflow-build",
        destination: "/services/ai-feature-launch",
        permanent: true,
      },
      {
        source: "/services/ongoing-improvements",
        destination: "/services/embedded-ai-engineer",
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
