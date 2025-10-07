import type {NextConfig} from "next";
import redirects from './url-mappings.json';

const config: NextConfig = {
    async redirects() {
        return redirects;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default config;
