import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = "C:/Users/Stuart/Documents/FM/Sendero/Nueva Web Sendero/sendero";
const destination = path.join(root, "public/sites/sendero2-fmmarketingdigital-com-0ca8991d/oferta-academica-basica-media-875e6cdf/images");
const assets = {
  "MG_0918-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_0918-1024x683.jpg",
  "MG_8230-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_8230-1024x683.jpg",
  "MG_8309-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_8309-1024x683.jpg",
  "IMG_0057-683x1024.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/IMG_0057-683x1024.jpg",
  "MG_1996-scaled.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_1996-scaled.jpg",
};

await mkdir(destination, { recursive: true });
for (const [filename, url] of Object.entries(assets)) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  await writeFile(path.join(destination, filename), Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${filename}`);
}
