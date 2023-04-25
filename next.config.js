/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'i.ibb.co'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    env: {
        BACKEND_BASE_URL: process.env.BACKEND_BASE_URL
    }
};

module.exports = nextConfig;
