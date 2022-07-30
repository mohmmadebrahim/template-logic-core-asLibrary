/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    BASE_URL: 'https://dev.example.com/public/api/',
  },
}

module.exports = nextConfig
