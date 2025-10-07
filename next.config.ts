import type {NextConfig} from "next";
import redirects from './url-mappings.json';

const config: NextConfig = {
    async redirects() {
        return redirects;
    },
};

export default config;
