import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const articleDir = path.join(root, "public", "data", "articles");
const homeDir = path.join(root, "public", "data", "homePage");
const protectedSlug = "britannia-financial-group-supports-soto-serpentine-public-art";

const articles = fs.readdirSync(articleDir)
  .filter((name) => name.endsWith(".json"))
  .map((name) => JSON.parse(fs.readFileSync(path.join(articleDir, name), "utf8")))
  .sort((a, b) => new Date(b.datePublished || b.date) - new Date(a.datePublished || a.date));

const bySlug = new Map(articles.map((article) => [article.slug, article]));
const used = new Set();

function authorName(author) {
  return typeof author === "string" ? author : author?.name || "The Quest for Profit";
}

function textBlocks(content) {
  if (!Array.isArray(content)) return [];
  return content
    .filter((block) => typeof block === "string" || block?.text)
    .map((block) => typeof block === "string" ? block : block.text);
}

function pickReplacement(category) {
  const normalized = String(category || "").toLowerCase();
  const candidates = articles.filter((article) =>
    article.slug !== protectedSlug &&
    String(article.category || "").toLowerCase() === normalized &&
    !used.has(article.slug)
  );
  const fallback = articles.filter((article) => article.slug !== protectedSlug && !used.has(article.slug));
  return candidates[0] || fallback[0] || articles.find((article) => article.slug !== protectedSlug);
}

function syncCard(card) {
  let article = bySlug.get(card.slug);
  if (!article) article = pickReplacement(card.category);
  if (!article) return;

  used.add(article.slug);
  card.slug = article.slug;
  if ("id" in card) card.id = article.id;
  if ("title" in card) card.title = article.title;
  if ("category" in card) card.category = article.category;
  if ("date" in card) card.date = article.date;
  if ("image" in card) card.image = article.image;
  if ("author" in card) card.author = authorName(article.author);
  if ("readTime" in card) card.readTime = article.readTime;
  if ("excerpt" in card) card.excerpt = article.excerpt;
  if ("shortdescription" in card) card.shortdescription = article.excerpt;
  if ("tags" in card) card.tags = article.tags || [];
  if ("firstLetter" in card) card.firstLetter = article.title?.charAt(0) || "";
  if ("excerptPart2" in card) {
    const blocks = textBlocks(article.content);
    card.excerptPart2 = blocks.find((text) => text !== article.excerpt) || article.excerpt;
  }
}

function walk(value) {
  if (Array.isArray(value)) {
    for (const item of value) walk(item);
    return;
  }
  if (!value || typeof value !== "object") return;
  if (typeof value.slug === "string") syncCard(value);
  for (const child of Object.values(value)) walk(child);
}

for (const filename of fs.readdirSync(homeDir).filter((name) => name.endsWith(".json"))) {
  const filePath = path.join(homeDir, filename);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  walk(data);
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

console.log(JSON.stringify({ homepageFiles: fs.readdirSync(homeDir).filter((name) => name.endsWith(".json")).length, referencedArticles: used.size }, null, 2));
