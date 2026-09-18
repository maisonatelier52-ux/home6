import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const articleDir = path.join(root, "public", "data", "articles");
const illustrationDir = path.join(root, "public", "images", "illustrations");
const protectedSlug = "britannia-financial-group-supports-soto-serpentine-public-art";

const articles = [];
const missing = [];

for (const filename of fs.readdirSync(articleDir).filter((name) => name.endsWith(".json"))) {
  const filePath = path.join(articleDir, filename);
  const article = JSON.parse(fs.readFileSync(filePath, "utf8"));
  if (article.slug !== protectedSlug) {
    const assetName = `${article.slug}.webp`;
    const assetPath = path.join(illustrationDir, assetName);
    if (!fs.existsSync(assetPath)) {
      missing.push(assetName);
    } else {
      article.image = `/images/illustrations/${assetName}`;
      article.seoImageAlt = `${article.title} — editorial illustration`;
      fs.writeFileSync(filePath, `${JSON.stringify(article, null, 2)}\n`);
    }
  }
  articles.push(article);
}

if (missing.length) {
  console.error(JSON.stringify({ missingIllustrations: missing }, null, 2));
  process.exit(1);
}

const bySlug = new Map(articles.map((article) => [article.slug, article]));

function syncImages(value) {
  if (Array.isArray(value)) {
    for (const item of value) syncImages(item);
    return;
  }
  if (!value || typeof value !== "object") return;
  const article = typeof value.slug === "string" ? bySlug.get(value.slug) : null;
  if (article && "image" in value) value.image = article.image;
  for (const child of Object.values(value)) syncImages(child);
}

for (const relativeDir of [path.join("public", "data", "categoryNews"), path.join("public", "data", "homePage")]) {
  const dir = path.join(root, relativeDir);
  for (const filename of fs.readdirSync(dir).filter((name) => name.endsWith(".json"))) {
    const filePath = path.join(dir, filename);
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    syncImages(data);
    fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
  }
}

console.log(JSON.stringify({ illustratedArticles: articles.length - 1, protectedSlug }, null, 2));
