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
			name: 'starblock-regular',
			cssVariable: '--font-starblock',
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/starblock-regular-webfont.woff2'],
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
});
