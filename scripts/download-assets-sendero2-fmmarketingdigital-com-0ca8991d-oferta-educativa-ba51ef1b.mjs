import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("public/sites/sendero2-fmmarketingdigital-com-0ca8991d/oferta-educativa-ba51ef1b/images");
const assets = {
  "MG_4271-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_4271-1024x683.jpg",
  "Copia-de-_MG_5918-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/Copia-de-_MG_5918-1024x683.jpg",
  "Copia-de-IMG_8616-683x1024.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/Copia-de-IMG_8616-683x1024.jpg",
  "MG_4558-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_4558-1024x683.jpg",
  "Copia-de-IMG_9701-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/Copia-de-IMG_9701-1024x683.jpg",
  "MG_8269-1-scaled.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_8269-1-scaled.jpg",
  "604642_80s_90s_1920x1080.mp4": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/01/604642_80s_90s_1920x1080.mp4",
};

await mkdir(root, { recursive: true });
for (const [filename, url] of Object.entries(assets)) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  await writeFile(path.join(root, filename), Buffer.from(await response.arrayBuffer()));
  console.log(`${filename} (${response.headers.get("content-length") ?? "unknown"} bytes)`);
}
