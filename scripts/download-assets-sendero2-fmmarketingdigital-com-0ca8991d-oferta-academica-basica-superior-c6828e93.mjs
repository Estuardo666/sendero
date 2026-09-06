import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = "C:/Users/Stuart/Documents/FM/Sendero/Nueva Web Sendero/sendero";
const destination = path.join(root, "public/sites/sendero2-fmmarketingdigital-com-0ca8991d/oferta-academica-basica-superior-c6828e93/images");
const assets = {
  "MG_8269-1-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_8269-1-1024x683.jpg",
  "MG_1996-scaled.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_1996-scaled.jpg",
};

await mkdir(destination, { recursive: true });
for (const [filename, url] of Object.entries(assets)) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  await writeFile(path.join(destination, filename), Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${filename}`);
}
