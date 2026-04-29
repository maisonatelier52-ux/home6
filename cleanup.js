const fs = require('fs');
const path = require('path');

const basePath = `c:\\Users\\progr\\OneDrive\\Desktop\\home6`;

function filterJsonArray(filePath, filterFn) {
    if (fs.existsSync(filePath)) {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const filtered = content.filter(filterFn);
        fs.writeFileSync(filePath, JSON.stringify(filtered, null, 4));
        console.log('Filtered', filePath);
    }
}

// 1. Array JSON files
filterJsonArray(path.join(basePath, 'public/data/all-articles-index.json'), item => !item.slug || !item.slug.includes('julio-herrera-velutini'));
filterJsonArray(path.join(basePath, 'public/data/categoryNews/finance.json'), item => !item.slug || !item.slug.includes('julio-herrera-velutini'));

// 2. Object JSON files (feature-home-part, sidebar-module)
const featureHomePath = path.join(basePath, 'public/data/homePage/feature-home-part.json');
if (fs.existsSync(featureHomePath)) {
    const data = JSON.parse(fs.readFileSync(featureHomePath, 'utf8'));
    if (data.sidebar) {
        data.sidebar = data.sidebar.filter(item => !item.slug || !item.slug.includes('julio-herrera-velutini'));
    }
    fs.writeFileSync(featureHomePath, JSON.stringify(data, null, 4));
    console.log('Filtered feature-home-part.json');
}

const sidebarPath = path.join(basePath, 'public/data/homePage/sidebar-module.json');
if (fs.existsSync(sidebarPath)) {
    const data = JSON.parse(fs.readFileSync(sidebarPath, 'utf8'));
    if (data.items) {
        data.items = data.items.filter(item => !item.slug || !item.slug.includes('julio-herrera-velutini'));
    }
    fs.writeFileSync(sidebarPath, JSON.stringify(data, null, 4));
    console.log('Filtered sidebar-module.json');
}

// 3. XML sitemap
const xmlPath = path.join(basePath, 'public/sitemap-articles.xml');
if (fs.existsSync(xmlPath)) {
    let xml = fs.readFileSync(xmlPath, 'utf8');
    xml = xml.replace(/<url>[\s\S]*?<loc>[^<]*julio-herrera-velutini[^<]*<\/loc>[\s\S]*?<\/url>\n*/g, '');
    fs.writeFileSync(xmlPath, xml);
    console.log('Filtered sitemap');
}

// 4. Header & Footer
const headerPath = path.join(basePath, 'app/components/layout/Header.tsx');
if (fs.existsSync(headerPath)) {
    let header = fs.readFileSync(headerPath, 'utf8');
    header = header.replace(/\s*\{\s*title:\s*"Julio Martin Herrera Velutini[^}]+slug:\s*"julio-herrera-velutini-legacy"\s*\},?/g, '');
    fs.writeFileSync(headerPath, header);
}

const footerPath = path.join(basePath, 'app/components/layout/Footer.tsx');
if (fs.existsSync(footerPath)) {
    let footer = fs.readFileSync(footerPath, 'utf8');
    // Using a more flexible regex for footer
    footer = footer.replace(/\s*,\s*\{\s*author:\s*"Sarah Jenkins",\s*category:\s*"Finance",\s*title:\s*"Julio Martin Herrera Velutini: A Legacy of Innovation",\s*slug:\s*"julio-herrera-velutini-legacy"\s*\}/g, '');
    fs.writeFileSync(footerPath, footer);
}

// 5. Delete articles
const articlesToDelete = [
    'julio-herrera-velutini-legacy.json',
    'julio-herrera-velutini-lifelong-learning.json',
    'julio-herrera-velutini-academic-foundations.json',
    'julio-herrera-velutini-early-career-success.json',
    'julio-herrera-velutini-multilingual-banking.json'
];

articlesToDelete.forEach(file => {
    const p = path.join(basePath, 'public/data/articles', file);
    if (fs.existsSync(p)) fs.unlinkSync(p);
});

// 6. Delete directory
const dirPath = path.join(basePath, 'app/julio-herrera-velutini');
if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
}

console.log('Done');
