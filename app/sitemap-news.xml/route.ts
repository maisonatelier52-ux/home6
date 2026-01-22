import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://www.thequestforprofit.com';
    const lastMod = new Date().toISOString().split('T')[0];
    const categories = ['politics', 'markets', 'business', 'finance', 'tech', 'wealth'];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${categories.map(category => `
    <url>
        <loc>${baseUrl}/${category}/</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>`).join('')}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
