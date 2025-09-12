/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better SEO
  experimental: {
    optimizeCss: true,
  },
  
  // Compress images for better performance
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Enable compression
  compress: true,
  
  // Security headers for better SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  
  // Enable static optimization
  trailingSlash: false,
  
  // PWA and performance optimizations
  poweredByHeader: false,
  
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Optimize bundle
  swcMinify: true,
}

module.exports = nextConfig
