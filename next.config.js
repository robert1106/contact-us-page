/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')

const nextConfig = {
  images: {
    domains: ['localhost'].filter(Boolean)
  }
}

module.exports = withPlugins([[withSvgr]], nextConfig)
