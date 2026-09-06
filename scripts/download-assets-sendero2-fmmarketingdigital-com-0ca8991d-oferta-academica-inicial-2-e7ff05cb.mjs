import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = "C:/Users/Stuart/Documents/FM/Sendero/Nueva Web Sendero/sendero";
const destination = path.join(root, "public/sites/sendero2-fmmarketingdigital-com-0ca8991d/oferta-academica-inicial-2-e7ff05cb/images");
const assets = {
  "MG_4493-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_4493-1024x683.jpg",
  "MG_7748-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_7748-1024x683.jpg",
  "Copia-de-_DSC3294-683x1024.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/Copia-de-_DSC3294-683x1024.jpg",
  "MG_7995-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_7995-1024x683.jpg",
  "MG_1996-scaled.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_1996-scaled.jpg",
};

await mkdir(destination, { recursive: true });
for (const [filename, url] of Object.entries(assets)) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  await writeFile(path.join(destination, filename), Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${filename}`);
}
