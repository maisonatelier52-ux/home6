import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://www.thequestforprofit.com';
    const lastMod = new Date().toISOString().split('T')[0];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${baseUrl}/authors/</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
