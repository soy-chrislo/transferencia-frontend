import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"placehold.co",
			"pics.filmaffinity.com",
			"cdn.hobbyconsolas.com",
			"m.media-amazon.com",
		],
	},
};

export default nextConfig;
