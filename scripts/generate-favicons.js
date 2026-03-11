const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SOURCE = path.join(__dirname, "../public/images/gallery/logo.png");
const PUBLIC = path.join(__dirname, "../public");
const APP = path.join(__dirname, "../src/app");

async function generateFavicons() {
  const input = sharp(SOURCE);
  const metadata = await input.metadata();
  console.log(`Source logo: ${metadata.width}x${metadata.height}`);

  // favicon.ico (32x32 PNG, browsers accept PNG favicons)
  await sharp(SOURCE)
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(PUBLIC, "favicon.ico"));
  console.log("Created: public/favicon.ico (32x32)");

  // icon.png for Next.js App Router (32x32)
  await sharp(SOURCE)
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(APP, "icon.png"));
  console.log("Created: src/app/icon.png (32x32)");

  // apple-touch-icon (apple-icon.png) for Next.js App Router (180x180)
  await sharp(SOURCE)
    .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(APP, "apple-icon.png"));
  console.log("Created: src/app/apple-icon.png (180x180)");

  // OG image fallback / large icon (512x512)
  await sharp(SOURCE)
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(PUBLIC, "icon-512.png"));
  console.log("Created: public/icon-512.png (512x512)");

  // 192x192 for web manifest
  await sharp(SOURCE)
    .resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(PUBLIC, "icon-192.png"));
  console.log("Created: public/icon-192.png (192x192)");

  console.log("\nAll favicons generated!");
}

generateFavicons().catch(console.error);
