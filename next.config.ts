import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
			{
				protocol: "https",
				hostname: "pics.filmaffinity.com",
			},
			{
				protocol: "https",
				hostname: "cdn.hobbyconsolas.com",
			},
			{
				protocol: "https",
				hostname: "m.media-amazon.com",
			},
		],
	},
};

export default nextConfig;
