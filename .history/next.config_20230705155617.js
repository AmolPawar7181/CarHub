/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.imagin.studio'],
	},
};
const env = {
	rapidApiKey: 'key',
};

module.exports = {nextConfig, env};
