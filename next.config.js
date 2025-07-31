/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add canvas as an external dependency for PDF.js to work
    config.externals = [...config.externals, { canvas: "canvas" }];
    return config;
  },
};

module.exports = nextConfig;
