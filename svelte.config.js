import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html',
            base: '/personal_site',
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : "/personal_site" //process.env.BASE_PATH
		}
	}
};

export default config;
