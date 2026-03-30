// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'a11y-examples',
			// GitHub Pages URL
			site: 'https://shkeating.github.io', 
			// repository name
			base: '/a11y-examples',
			customCss: [
				'./src/styles/global.css',
			],
			social: [
				{
				label: 'repo link',
				icon: 'github',
				href: 'https://github.com/shkeating/a11y-examples',
    			},
			],
			sidebar: [
				{
					label: 'HTML Tables',
					autogenerate: { directory: 'tables' },
				},
			],
		}),
	],
});