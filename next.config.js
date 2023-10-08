/** @type {import('next').NextConfig} */
// buildExcludes is for next13
//disable is for swGenerate multiple time warning(disable in dev)
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  sw: '/sw.js',
  buildExcludes: ['app-build-manifest.json'],
  disable: process.env.NODE_ENV === 'development',
});
module.exports = withPWA({});
