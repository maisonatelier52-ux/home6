import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://www.thequestforprofit.com';
    const lastMod = new Date().toISOString().split('T')[0];

    const pages = [
        { url: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
        { url: `${baseUrl}/about-us/`, priority: '0.7', changefreq: 'yearly' },
        { url: `${baseUrl}/privacy-policy/`, priority: '0.5', changefreq: 'yearly' },
        { url: `${baseUrl}/terms-conditions/`, priority: '0.5', changefreq: 'yearly' },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(page => `
    <url>
        <loc>${page.url}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`).join('')}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
