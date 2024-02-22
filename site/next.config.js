/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://github.com/couldrons2022/kasm-repository/img/logo.svg',
    listUrl: 'https://github.com/couldrons2022/kasm-repository/',
    contactUrl: 'https://github.com/couldrons2022/kasm-repository/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
