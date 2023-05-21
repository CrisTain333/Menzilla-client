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
    eslint: {
        dirs: ['pages', 'libs', 'Config', 'Helpers', 'styles', 'common', 'Components', 'modules']
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    env: {
        BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
        CLOUD_NAME: process.env.CLOUD_NAME,
        CLOUD_API_KEY: process.env.CLOUD_API_KEY,
        CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
        IMAGE_API_KEY: process.env.IMAGE_API_KEY
    }
};

module.exports = nextConfig;
