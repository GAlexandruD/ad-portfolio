/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
}
