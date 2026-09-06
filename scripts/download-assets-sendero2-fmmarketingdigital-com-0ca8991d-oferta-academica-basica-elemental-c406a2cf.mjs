import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = "C:/Users/Stuart/Documents/FM/Sendero/Nueva Web Sendero/sendero";
const destination = path.join(root, "public/sites/sendero2-fmmarketingdigital-com-0ca8991d/oferta-academica-basica-elemental-c406a2cf/images");
const assets = {
  "MG_8265-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_8265-1024x683.jpg",
  "IMG_0073-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/IMG_0073-1024x683.jpg",
  "IMG_1320-683x1024.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/IMG_1320-683x1024.jpg",
  "Copia-de-_MG_3150-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/Copia-de-_MG_3150-1024x683.jpg",
  "MG_1996-scaled.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_1996-scaled.jpg",
};

await mkdir(destination, { recursive: true });
for (const [filename, url] of Object.entries(assets)) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  await writeFile(path.join(destination, filename), Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${filename}`);
}
