import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
	return rss({
		title: 'theodinblog',
		description: "theodinspire's thoughts and ramblings",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: '<language>en-us</language>',
	});
}
