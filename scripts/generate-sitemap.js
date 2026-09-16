const fs = require('fs');
const path = require('path');

const INDEX_PATH = path.join(__dirname, '../public/data/all-articles-index.json');
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap-articles.xml');
const DOMAIN = 'https://www.thequestforprofit.com';

// Function to convert "September 14, 2026" to "2026-09-14"
function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return new Date().toISOString().split('T')[0];
  
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
}

function generateSitemap() {
  console.log('Generating sitemap-articles.xml...');
  
  const rawData = fs.readFileSync(INDEX_PATH, 'utf-8');
  const articles = JSON.parse(rawData);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  articles.forEach(article => {
    const slug = article.slug;
    const category = article.category.toLowerCase();
    const lastMod = formatDate(article.date);

    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/${category}/${slug}</loc>\n`;
    xml += `    <lastmod>${lastMod}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf-8');
  console.log('Sitemap generated successfully!');
}

generateSitemap();
