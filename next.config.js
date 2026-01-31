/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    // Allow fonts to fail gracefully during build
    experimental: {
      optimizeFonts: true,
    },
  };
  
  module.exports = nextConfig;
  