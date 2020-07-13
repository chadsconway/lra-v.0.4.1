export default {
	generate: {
		subFolders: false,
	},
	mode: 'universal',
	server: {
		port: 8000,
		host: '0.0.0.0',
	},
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				type: 'text/css',
				href: 'https://www.w3schools.com/w3css/4/w3.css',
			},
			{
				href:
					'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&family=Lobster&family=Oxygen&family=Playball&family=Poppins:wght@200;300;400&family=Roboto+Mono:wght@300&family=Satisfy&family=Shadows+Into+Light&display=swap',
				rel: 'stylesheet',
			},
			// {
			// 	rel: 'stylesheet',
			// 	type: 'text/css',
			// 	href:
			// 		'https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/		spectrum.min.css',
			// },
			// {
			// 	rel: 'stylesheet',
			// 	type: 'text/css',
			// 	href: '',
			// },
		],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: ['@/assets/css/animate.css'],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		/**
		 * jquery - for spectrum plugin
		 */
		{ src: '@/plugins/jquery.js', mode: 'client' },

		/**
		 * Spectrum colorpicker
		 */
		// { src: '@/plugins/spectrum.js', mode: 'client' },

		/**
		 * Country and regions select dropdown for
		 * join.vue
		 */
		{ src: '@/plugins/countryregionselect.js' },
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ['@nuxtjs/vuetify'],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			if (ctx.isClient) {
				console.log(ctx);
			}
		},
	},
};
