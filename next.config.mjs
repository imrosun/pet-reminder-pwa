/** @type {import('next').NextConfig} */
import withPWA from "next-pwa"

const nextConfig = {
    // distDir: "build",
    reactStrictMode: true,
    // skipWaiting: true,
    // swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    }
};

export default withPWA({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
    runtimeCaching: [],
})(nextConfig);
