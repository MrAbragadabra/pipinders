import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://pipinders.ru',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://pipinders.ru/how-to-play',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.0,
		},
		{
			url: 'https://pipinders.ru/rules',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.0,
		},
		{
			url: 'https://pipinders.ru/commands',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.0,
		},
		{
			url: 'https://pipinders.ru/history',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.0,
		},
		{
			url: 'https://pipinders.ru/donate',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.0,
		},
		{
			url: 'https://pipinders.ru/about',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.0,
		},
	]
}
