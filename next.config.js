/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
