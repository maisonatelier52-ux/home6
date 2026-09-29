import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // Explicitly allow Googlebot
                userAgent: ['Googlebot', 'Googlebot-Image', 'Bingbot'],
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
            {
                // Block AI scrapers to save your crawl budget for Google!
                userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Anthropic-ai', 'CCBot', 'Omgilibot', 'FacebookBot'],
                disallow: '/',
            },
            {
                // Default rule for all other bots
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
        ],
        sitemap: 'https://www.thequestforprofit.com/sitemap.xml',
        host: 'https://www.thequestforprofit.com',
    }
}
