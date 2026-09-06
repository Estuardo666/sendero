import { mkdir, writeFile } from "node:fs/promises";

const outputDir = "public/sites/sendero2-fmmarketingdigital-com-0ca8991d/galeria-6d108626/images";
const baseUrl = "https://sendero2.fmmarketingdigital.com/wp-content/uploads/2025/09";
const filenames = [
  "MG_4051-scaled.jpg",
  "IMG_1247-scaled.jpg",
  "Copia-de-_MG_3295-scaled.jpg",
  "MG_8030-scaled.jpg",
  "MG_7681-scaled.jpg",
  "MG_8077-scaled.jpg",
  "Copia-de-IMG_3782-scaled.jpg",
  "Copia-de-IMG_3759-scaled.jpg",
  "Copia-de-IMG_9594-scaled.jpg",
  "Copia-de-IMG_4456-scaled.jpg",
  "IMG_0077-scaled.jpg",
  "MG_7748-scaled.jpg",
  "MG_7712-scaled.jpg",
  "MG_3409-scaled.jpg",
  "510960123_18387759118186145_7593259977311163963_n.jpg",
  "IMG_0026-scaled.jpg",
  "DSC_0399-scaled.jpg",
  "MG_8309-scaled.jpg",
  "MG_8230-scaled.jpg",
  "MG_8212-scaled.jpg",
];

await mkdir(outputDir, { recursive: true });
await Promise.all(filenames.map(async (filename) => {
  const url = `${baseUrl}/${filename}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  await writeFile(`${outputDir}/${filename}`, Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${filename}`);
}));
