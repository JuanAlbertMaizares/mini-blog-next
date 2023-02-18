/** @type {import('next').NextConfig} */
// nte ADD configuracion para usar directorio App para nuevas rutas
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true
}

module.exports = nextConfig
