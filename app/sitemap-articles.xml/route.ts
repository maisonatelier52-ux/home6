import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const baseUrl = 'https://www.thequestforprofit.com';
    const lastMod = new Date().toISOString().split('T')[0];
    const articlesDirectory = path.join(process.cwd(), 'public/data/articles');

    let articles: any[] = [];
    try {
        const articleFiles = fs.readdirSync(articlesDirectory);
        articles = articleFiles
            .filter((file) => file.endsWith('.json'))
            .map((file) => {
                const slug = file.replace('.json', '');
                try {
                    const articleContent = fs.readFileSync(path.join(articlesDirectory, file), 'utf8');
                    const article = JSON.parse(articleContent);
                    const category = (article.category || 'news').toLowerCase();
                    return {
                        url: `${baseUrl}/${category}/${slug}/`,
                    };
                } catch (e) {
                    return {
                        url: `${baseUrl}/news/${slug}/`,
                    };
                }
            });
    } catch (error) {
        console.error('Error reading articles for sitemap:', error);
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${articles.map(article => `
    <url>
        <loc>${article.url}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>`).join('')}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
