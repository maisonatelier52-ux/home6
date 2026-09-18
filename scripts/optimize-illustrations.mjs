import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "public", "images", "illustrations");
const archiveDir = path.join(root, "..", "illustration-source-png");
const sources = fs.readdirSync(sourceDir).filter((name) => name.endsWith(".png")).sort();

fs.mkdirSync(archiveDir, { recursive: true });

for (const filename of sources) {
  const sourcePath = path.join(sourceDir, filename);
  const outputPath = path.join(sourceDir, filename.replace(/\.png$/i, ".webp"));
  await sharp(sourcePath)
    .resize(1280, 820, { fit: "cover" })
    .webp({ quality: 84, effort: 5 })
    .toFile(outputPath);
  fs.renameSync(sourcePath, path.join(archiveDir, filename));
}

const optimized = fs.readdirSync(sourceDir).filter((name) => name.endsWith(".webp"));
const totalBytes = optimized.reduce((sum, filename) => sum + fs.statSync(path.join(sourceDir, filename)).size, 0);
console.log(JSON.stringify({ optimized: optimized.length, totalBytes, archivedSources: sources.length, archiveDir }, null, 2));
