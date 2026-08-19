/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 31536000,
  },
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
