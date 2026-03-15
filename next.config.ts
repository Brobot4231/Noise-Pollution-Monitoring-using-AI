import type {NextConfig} from 'next';

// Remove incomplete localStorage from Node 22+ so SSR libraries fallback correctly
if (typeof global !== "undefined" && global.localStorage) {
  try {
    delete (global as any).localStorage;
  } catch (e) {}
}

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '25mb',
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "async_hooks": false,
      };
    }
    return config;
  }
};

export default nextConfig;
