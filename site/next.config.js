/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kodedeneme Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://github.com/couldrons2022/kasm-registry/img/logo.svg',
    listUrl: 'https://couldrons2022.github.io/kasm-registry/',
    contactUrl: 'https://github.com/couldrons2022/kasm-registry/issues',
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
