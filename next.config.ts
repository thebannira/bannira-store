import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**'
      },
    ],
  },
  async headers() {
    if (process.env.NEXT_PUBLIC_APP_ENV === 'dev') {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'noindex, nofollow, noarchive',
            },
          ],
        },
      ];
    }
    return [];
  },
};

export default nextConfig;