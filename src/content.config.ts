import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { slug } from 'github-slugger';
import { z } from 'astro/zod';

const datedIdPattern = /^\d{8}-\d+/;

const blog = defineCollection({
	loader: glob({
		pattern: ['*.(md|mdx)', '*/index.(md|mdx)'],
		base: './src/content/blog',
		generateId({ entry, data }) {
			const match = entry.match(datedIdPattern);
			if (match[0]) return slug(match[0]);
			if (typeof data.slug === 'string') return slug(data.slug);
			return slug('an post');
		},
	}),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string().optional(),
		author: z.string().default('Odin Ravensson'),
		image: z
			.object({
				url: z.url(),
				alt: z.string(),
			})
			.optional(),
		tags: z.string().array(),
	}),
});

export const collections = { blog };
