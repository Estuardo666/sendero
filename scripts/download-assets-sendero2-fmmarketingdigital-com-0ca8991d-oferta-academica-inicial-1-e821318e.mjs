import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("public/sites/sendero2-fmmarketingdigital-com-0ca8991d/oferta-academica-inicial-1-e821318e/images");
const assets = {
  "IMG_0105-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/IMG_0105-1024x683.jpg",
  "MG_4379-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_4379-1024x683.jpg",
  "Copia-de-IMG_3759-1-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/Copia-de-IMG_3759-1-1024x683.jpg",
  "Copia-de-IMG_9594-683x1024.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/Copia-de-IMG_9594-683x1024.jpg",
  "Recurso-22@2x.png": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/Recurso-22@2x.png",
  "MG_1996-scaled.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_1996-scaled.jpg",
};

await mkdir(root, { recursive: true });
for (const [filename, url] of Object.entries(assets)) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  await writeFile(path.join(root, filename), Buffer.from(await response.arrayBuffer()));
  console.log(`${filename} (${response.headers.get("content-length") ?? "unknown"} bytes)`);
}
