import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/about/', '/commands/', '/donate/', '/history/', '/how-to-play/', '/rules/'],
    },
    sitemap: 'https://pipinders.ru/sitemap.xml',
  }
}