/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === "production" ? "/Portifolio-" : ""

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
}

export default nextConfig
