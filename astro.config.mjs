// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://theodinspire.com',
	integrations: [vue(), mdx()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'cyberthrone',
			cssVariable: '--font-cyberthrone',
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/cyberthrone.ttf'],
						weight: 'normal',
						style: 'normal',
					},
				],
			},
		},
	],

	vite: {
		plugins: [tailwindcss()],
	},

	markdown: {
		shikiConfig: {
			theme: 'dracula',
		},
	},
});
