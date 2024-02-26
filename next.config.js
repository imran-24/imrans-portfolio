/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images:{
        domains:["cdn.sanity.io"]
    }
}

module.exports = nextConfig



