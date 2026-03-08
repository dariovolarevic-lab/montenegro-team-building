const sharp = require("sharp");
const fs = require("fs");

const images = ["TH1", "TH2", "TH3", "TH4", "TH5", "TH6"].map(
  (n) => `public/images/activities/${n}.webp`
);

Promise.all(
  images.map((f) =>
    sharp(f)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer()
      .then((buf) => {
        fs.writeFileSync(f, buf);
        const sizeKB = Math.round(fs.statSync(f).size / 1024);
        console.log(`${f} → ${sizeKB} KB`);
      })
  )
)
  .then(() => console.log("Done"))
  .catch(console.error);
