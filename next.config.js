/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },

  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
}
