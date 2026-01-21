import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.thequestforprofit.com'
    const lastMod = new Date().toISOString().split('T')[0] // Get current date in YYYY-MM-DD format

    // 1. Static Pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: lastMod,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/authors/`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/terms-conditions/`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy-policy/`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/about-us/`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
    ]

    // 2. Category Pages
    const categories = ['politics', 'markets', 'business', 'finance', 'tech', 'wealth']
    const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
        url: `${baseUrl}/${category}/`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
    }))

    // 3. Article Pages
    const articlesDirectory = path.join(process.cwd(), 'public/data/articles')
    let articlePages: MetadataRoute.Sitemap = []

    try {
        const articleFiles = fs.readdirSync(articlesDirectory)
        articlePages = articleFiles
            .filter((file) => file.endsWith('.json'))
            .map((file) => {
                const slug = file.replace('.json', '')
                return {
                    url: `${baseUrl}/article/${slug}/`,
                    lastModified: lastMod,
                    changeFrequency: 'daily',
                    priority: 1.0,
                }
            })
    } catch (error) {
        console.error('Error reading articles for sitemap:', error)
    }

    return [...staticPages, ...categoryPages, ...articlePages]
}
