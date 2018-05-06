import axios from 'axios';

export default {
	// getSiteData: () => ({
	//   title: 'React Static',
	// }),
	getRoutes: async () => {
		return [
			{path: '/'},
			{path: '/about'},
			{path: '/examples'},
			{path: '/signup'},
		];
	},
	webpack: (config, {stage}) => {
		if (stage === 'prod') {
			config.entry = ['babel-polyfill', config.entry];
			config.node = {
				console: true,
				fs: 'empty',
				net: 'empty',
				tls: 'empty',
			};
		} else if (stage === 'dev') {
			config.entry = ['babel-polyfill', ...config.entry];
			config.node = {
				console: true,
				fs: 'empty',
				net: 'empty',
				tls: 'empty',
			};
		}
		return config;
	},
};
