/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/i",
                permanent: true, // true для 308 редиректа, false для 307
            },
        ];
    },
};

export default nextConfig;
