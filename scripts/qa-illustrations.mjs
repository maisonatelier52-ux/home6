import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "public", "images", "illustrations");
const outputDir = path.join(root, "..", "illustration-qa");
const files = fs.readdirSync(sourceDir).filter((name) => /\.(?:png|webp)$/i.test(name)).sort();

fs.mkdirSync(outputDir, { recursive: true });

const metadata = [];
for (const filename of files) {
  const image = sharp(path.join(sourceDir, filename));
  const info = await image.metadata();
  metadata.push({ filename, width: info.width, height: info.height, format: info.format });
}

const invalid = metadata.filter((item) => !item.width || !item.height || item.width / item.height < 1.45 || item.width / item.height > 1.75);
if (invalid.length) {
  console.error(JSON.stringify({ invalid }, null, 2));
  process.exit(1);
}

const perSheet = 16;
const columns = 4;
const tileWidth = 320;
const tileHeight = 205;
const gap = 8;

for (let start = 0; start < files.length; start += perSheet) {
  const group = files.slice(start, start + perSheet);
  const rows = Math.ceil(group.length / columns);
  const composites = [];
  for (let index = 0; index < group.length; index += 1) {
    const input = await sharp(path.join(sourceDir, group[index]))
      .resize(tileWidth, tileHeight, { fit: "cover" })
      .png()
      .toBuffer();
    composites.push({
      input,
      left: (index % columns) * (tileWidth + gap),
      top: Math.floor(index / columns) * (tileHeight + gap),
    });
  }
  await sharp({
    create: {
      width: columns * tileWidth + (columns - 1) * gap,
      height: rows * tileHeight + (rows - 1) * gap,
      channels: 3,
      background: "#e8e5df",
    },
  }).composite(composites).jpeg({ quality: 88 }).toFile(path.join(outputDir, `sheet-${String(start / perSheet + 1).padStart(2, "0")}.jpg`));
}

fs.writeFileSync(path.join(outputDir, "manifest.json"), `${JSON.stringify(metadata, null, 2)}\n`);
console.log(JSON.stringify({ images: files.length, sheets: Math.ceil(files.length / perSheet), invalid: invalid.length, outputDir }, null, 2));
