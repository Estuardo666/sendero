import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = "C:/Users/Stuart/Documents/FM/Sendero/Nueva Web Sendero/sendero";
const destination = path.join(root, "public/sites/sendero2-fmmarketingdigital-com-0ca8991d/oferta-academica-basica-preparatoria-2162143c/images");
const assets = {
  "DSC_0399-1024x681.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/DSC_0399-1024x681.jpg",
  "IMG_0231-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/IMG_0231-1024x683.jpg",
  "MG_3800-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_3800-1024x683.jpg",
  "MG_1882-1024x683.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_1882-1024x683.jpg",
  "MG_1996-scaled.jpg": "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09/MG_1996-scaled.jpg",
};

await mkdir(destination, { recursive: true });
for (const [filename, url] of Object.entries(assets)) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  await writeFile(path.join(destination, filename), Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${filename}`);
}
