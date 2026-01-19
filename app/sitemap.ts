```
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.thequestforprofit.com'

    // Static pages
    const staticPages = [
        '',
        '/about-us',
        '/authors',
        '/privacy-policy',
        '/terms-conditions',
    ].map((route) => ({
        url: `${ baseUrl }${ route } `,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Category pages
    const categories = ['politics', 'markets', 'business', 'finance', 'tech', 'wealth']
    const categoryPages = categories.map((category) => ({
        url: `${ baseUrl } /category/${ category } `,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
    }))

    // Article pages - you can dynamically load these from your articles directory
    const fs = require('fs')
    const path = require('path')
    const articlesDirectory = path.join(process.cwd(), 'public/data/articles')
    const articleFiles = fs.readdirSync(articlesDirectory)

    const articlePages = articleFiles
        .filter((file: string) => file.endsWith('.json'))
        .map((file: string) => ({
            url: `${ baseUrl } /article/${ file.replace('.json', '') } `,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))

    return [...staticPages, ...categoryPages, ...articlePages]
}
